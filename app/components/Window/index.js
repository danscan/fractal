import React, { Component, PanResponder, PropTypes, View } from 'react-native';
import { List, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styles from './styles';

const windowPositionPropType = ImmutablePropTypes.contains({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,

  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
});

export default class Window extends Component {
  static propTypes = {
    children: PropTypes.any,
    onChangePosition: PropTypes.func.isRequired,
    position: windowPositionPropType.isRequired,
    style: View.propTypes.style,
  };

  constructor(props) {
    super(props);

    this.state = {
      isChangingPosition: false,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event) => this.gestureQualifiesAsChangeWindowPositionGesture(event),
      onMoveShouldSetPanResponder: (event) => this.gestureQualifiesAsChangeWindowPositionGesture(event),

      onPanResponderGrant: (event) => this.handleChangeWindowPositionGesture(event),
      onPanResponderMove: (event) => this.handleChangeWindowPositionGesture(event),
      onPanResponderRelease: () => this.handleEndChangeWindowPositionGesture(),
    });
  }

  gestureQualifiesAsChangeWindowPositionGesture(event) {
    const touches = event.nativeEvent.touches;

    return touches.length === 2;
  }

  handleBeginChangeWindowPositionGesture(event) {
    const { position } = this.props;
    const touches = event.nativeEvent.touches;

    const gestureTouchPositions = getGestureTouchPositions(touches);
    const firstTouch = gestureTouchPositions.get(0);
    const secondTouch = gestureTouchPositions.get(1);
    const minX = Math.min(firstTouch.get('locationX'), secondTouch.get('locationX'));
    const maxX = Math.max(firstTouch.get('locationX'), secondTouch.get('locationX'));
    const minY = Math.min(firstTouch.get('locationY'), secondTouch.get('locationY'));
    const maxY = Math.max(firstTouch.get('locationY'), secondTouch.get('locationY'));

    this._gestureInitialWindowPosition = position;
    this._gestureInitialWindowTouchLocations = new Map({
      minX,
      maxX,
      minY,
      maxY,
    });

    this.setState({
      isChangingPosition: true,
    });
  }

  handleChangeWindowPositionGesture(event) {
    const touches = event.nativeEvent.touches;

    if (!this._gestureInitialWindowTouchLocations) {
      this.handleBeginChangeWindowPositionGesture(event);
    }

    return requestAnimationFrame(() => this.handleChangeWindowPositionGestureTouches(touches));
  }

  handleChangeWindowPositionGestureTouches(touches) {
    const {
      onChangePosition,
      position,
    } = this.props;

    // (Gesture bounds)
    const gestureTouchPositions = getGestureTouchPositions(touches);
    const firstTouch = gestureTouchPositions.get(0);
    const secondTouch = gestureTouchPositions.get(1);
    if (!firstTouch || !secondTouch) return null;
    const gestureMinX = Math.min(firstTouch.get('pageX'), secondTouch.get('pageX'));
    const gestureMinY = Math.min(firstTouch.get('pageY'), secondTouch.get('pageY'));
    const gestureMaxX = Math.max(firstTouch.get('pageX'), secondTouch.get('pageX'));
    const gestureMaxY = Math.max(firstTouch.get('pageY'), secondTouch.get('pageY'));

    // (Gesture initial window touch locations)
    const gestureInitialWindowTouchLocations = this._gestureInitialWindowTouchLocations;
    if (!gestureInitialWindowTouchLocations) return null;
    const gestureInitialWindowTouchLocationMinX = gestureInitialWindowTouchLocations.get('minX');
    const gestureInitialWindowTouchLocationMaxX = gestureInitialWindowTouchLocations.get('maxX');
    const gestureInitialWindowTouchLocationMinY = gestureInitialWindowTouchLocations.get('minY');
    const gestureInitialWindowTouchLocationMaxY = gestureInitialWindowTouchLocations.get('maxY');

    // (Gesture initial window position)
    const gestureInitialWindowPosition = this._gestureInitialWindowPosition;
    const gestureInitialWindowWidth = gestureInitialWindowPosition.get('width');
    const gestureInitialWindowHeight = gestureInitialWindowPosition.get('height');

    // (New window position)
    const newWindowMinX = gestureMinX - gestureInitialWindowTouchLocationMinX;
    const newWindowMinY = gestureMinY - gestureInitialWindowTouchLocationMinY;
    const newWindowMaxX = gestureMaxX + (gestureInitialWindowWidth - gestureInitialWindowTouchLocationMaxX);
    const newWindowWidth = newWindowMaxX - newWindowMinX;
    const newWindowMaxY = gestureMaxY + (gestureInitialWindowHeight - gestureInitialWindowTouchLocationMaxY);
    const newWindowHeight = newWindowMaxY - newWindowMinY;

    const newPosition = position
      .set('x', newWindowMinX)
      .set('y', newWindowMinY)
      .set('width', newWindowWidth)
      .set('height', newWindowHeight);

    return onChangePosition(newPosition);
  }

  handleEndChangeWindowPositionGesture() {
    this.setState({
      isChangingPosition: false,
    });

    this._gestureInitialWindowTouchLocations = null;
  }

  render() {
    const {
      children,
      position,
      style,
    } = this.props;
    const { isChangingPosition } = this.state;
    const positionStyle = {
      top: position.get('y'),
      left: position.get('x'),
      width: position.get('width'),
      height: position.get('height'),
    };
    const stateStyle = isChangingPosition
      ? styles.containerChangingPosition
      : null;

    return (
      <View
        {...this._panResponder.panHandlers}
        style={[styles.container, stateStyle, style, positionStyle]}
      >
        <View style={styles.contents}>
          {children}
        </View>
      </View>
    );
  }
}

// (Private helpers)
function getGestureTouchPositions(touches) {
  return new List(touches.map(touch => new Map({
    locationX: touch.locationX,
    locationY: touch.locationY,

    pageX: touch.pageX,
    pageY: touch.pageY,
  })));
}
