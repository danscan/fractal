import React, { Component, PanResponder, PropTypes, View } from 'react-native';
import styles from './styles';

const NUMBER_OF_TOUCHES = 2;
const NUMBER_OF_SECONDS = 2;

export default class EditorToggleGestureInterceptor extends Component {
  static propTypes = {
    children: PropTypes.any,
    toggleEditor: PropTypes.func.isRequired,
  }

  constructor(...args) {
    super(...args);

    this.state = {
      currentGestureQualifiesAsToggleGesture: false,
    };
  }

  componentWillMount() {
    this._toggleGestureTimerId = null;

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => gestureQualifiesAsToggleGesture(gestureState),
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: (event, gestureState) => this.applyCurrentGestureState(event, gestureState),
      onPanResponderMove: (event, gestureState) => this.applyCurrentGestureState(event, gestureState),
      onPanResponderRelease: () => this.resetToggleTimer(),
    });
  }

  setToggleTimer() {
    const { toggleEditor } = this.props;

    this._toggleGestureTimerId = setTimeout(() => {
      toggleEditor();
    }, NUMBER_OF_SECONDS * 1000);
  }

  resetToggleTimer() {
    clearTimeout(this._toggleGestureTimerId);
    this._toggleGestureTimerId = null;

    this.setState({
      currentGestureQualifiesAsToggleGesture: false,
    });
  }

  applyCurrentGestureState(event, gestureState) {
    const currentGestureQualifiesAsToggleGesture = gestureQualifiesAsToggleGesture(gestureState);

    if (currentGestureQualifiesAsToggleGesture && !this._toggleGestureTimerId) {
      this.setToggleTimer();
    }

    if (!currentGestureQualifiesAsToggleGesture && this._toggleGestureTimerId) {
      this.resetToggleTimer();
    }

    this.setState({
      currentGestureQualifiesAsToggleGesture,
    });
  }

  renderToggleGestureOverlay() {
    const { currentGestureQualifiesAsToggleGesture } = this.state;

    if (!currentGestureQualifiesAsToggleGesture) {
      return null;
    }

    return (
      <View style={styles.toggleGestureOverlay}/>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <View {...this._panResponder.panHandlers} style={styles.container}>
        {children}
        {this.renderToggleGestureOverlay()}
      </View>
    );
  }
}

function gestureQualifiesAsToggleGesture(gestureState) {
  return gestureState.numberActiveTouches >= NUMBER_OF_TOUCHES;
}
