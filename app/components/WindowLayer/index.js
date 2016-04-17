import React, { Component, PropTypes, View } from 'react-native';
import { OrderedMap } from 'immutable';
import Window from '../Window';
import styles from './styles';

// (Configuration constants)
const DEFAULT_WINDOW_POSITION = new OrderedMap({
  x: 140,
  y: 100,

  width: 375,
  height: 405,
});

// (Prop type constants)
const windowPropType = PropTypes.shape({
  contents: PropTypes.any,
  key: PropTypes.string.isRequired,
  visible: PropTypes.bool,
});

export default class WindowLayer extends Component {
  static propTypes = {
    children: PropTypes.any,
    onCloseWindow: PropTypes.func.isRequired,
    style: View.propTypes.style,
    windows: PropTypes.arrayOf(windowPropType).isRequired,
  };

  static defaultProps = {
    onCloseWindow: () => {},
    windows: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      windowPositions: new OrderedMap,
    };
  }

  componentDidMount() {
    const { windows } = this.props;

    this.applyWindows(windows);
  }

  componentWillReceiveProps(nextProps) {
    const { windows } = this.props;
    const { windows: nextWindows } = nextProps;

    if (windows !== nextWindows) {
      this.applyWindows(nextWindows);
    }
  }

  applyWindows(windows) {
    const { windowPositions } = this.state;
    const nextWindowPositions = windows.reduce((memo, { key }) => {
      const windowPosition = windowPositions.get(key);

      return memo
        .set(key, windowPosition || DEFAULT_WINDOW_POSITION);
    }, new OrderedMap);

    this.setState({ windowPositions: nextWindowPositions });
  }

  renderWindow(window) {
    const { windowPositions } = this.state;
    const windowPosition = windowPositions.get(window.key);

    if (!window.visible || !windowPosition) {
      return null;
    }

    return (
      <Window
        key={window.key}
        onChangePosition={(newPosition) => this.setState({
          windowPositions: windowPositions
            .delete(window.key)
            .set(window.key, newPosition),
        })}
        position={windowPosition}
      >
        {window.contents}
      </Window>
    );
  }

  render() {
    const {
      children,
      windows,
      style,
    } = this.props;
    const { windowPositions } = this.state;

    return (
      <View style={[styles.container, style]}>
        {children}
        {windowPositions.map((windowPosition, windowKey) => {
          const window = windows.find(({ key }) => key === windowKey);

          return this.renderWindow(window);
        }).toArray()}
      </View>
    );
  }
}
