import React, {
  Component,
  PropTypes
} from 'react';
import {
  Animated,
  DeviceEventEmitter,
  Easing,
  View,
} from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

export default class KeyboardAwareView extends Component {
  static propTypes = {
    animated: PropTypes.bool,
    children: PropTypes.any,
    contentContainerStyle: View.propTypes.style,
    style: View.propTypes.style,
  };

  constructor(...args) {
    super(...args);

    this.state = {
      height: new Animated.Value(0),
    };
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('keyboardWillShow', (event) => this.onKeyboardWillShow(event));
    DeviceEventEmitter.addListener('keyboardWillHide', (event) => this.onKeyboardWillHide(event));
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('keyboardWillShow');
    DeviceEventEmitter.removeAllListeners('keyboardWillHide');
  }

  onKeyboardWillShow({ endCoordinates }) {
    const { screenY: endY } = endCoordinates;

    requestAnimationFrame(() => {
      this.outerView.measure((ox, oy, width, height, px, py) => {
        // target scrollView height should be :
        //   remaining height OR outerView height
        // = screen height - keyboard height OR outerView height
        const remainScreenMaxHeight = endY - py;
        const outerViewMaxHeight = height;
        const maxHeight = maxHeight > outerViewMaxHeight
                        ? outerViewMaxHeight
                        : remainScreenMaxHeight;

        Animated.timing(this.state.height, {
          toValue: maxHeight,
          duration: this.props.animated ? 200 : 0,
          easing: Easing.inOut(Easing.quad),
        }).start();
      });
    });
  }

  onKeyboardWillHide({ endCoordinates }) {
    const { screenY: endY } = endCoordinates;

    requestAnimationFrame(() => {
      // If the ref to outerView is not yet set, bail...
      if (!this.outerView) {
        return;
      }

      this.outerView.measure((ox, oy, width, height) => {
        // target scrollView height should be :
        //   remaining height OR outerView height
        // = screen height - keyboard height OR outerView height
        const remainScreenMaxHeight = endY;
        const outerViewMaxHeight = height;
        const maxHeight = maxHeight > outerViewMaxHeight
                        ? outerViewMaxHeight
                        : remainScreenMaxHeight;

        Animated.timing(this.state.height, {
          toValue: maxHeight,
          duration: this.props.animated ? 200 : 0,
          easing: Easing.inOut(Easing.quad),
        }).start();
      });
    });
  }

  render() {
    const {
      children,
      contentContainerStyle,
      style,
    } = this.props;

    return (
      <View
        ref={(outerViewRef) => { this.outerView = outerViewRef; }}
        onLayout={({ nativeEvent }) => {
          const { height } = nativeEvent.layout;

          Animated.timing(this.state.height, {
            toValue: height,
            duration: 0,
          }).start();

          dismissKeyboard();
        }}
        style={[{ backgroundColor: '#393939', flex: 1 }, style]}
      >
        <Animated.View
          ref={(ref) => {this.innerView = ref;}}
          style={[{ height: this.state.height }, contentContainerStyle]}
        >
          {children}
        </Animated.View>
      </View>
    );
  }
}
