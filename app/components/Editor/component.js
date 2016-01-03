import React, { Component, PanResponder, PropTypes, Text, View } from 'react-native';
import Root from '../Root';

export default class Editor extends Component {
  static propTypes = {
    editing: PropTypes.bool.isRequired,
    toggleEditor: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { toggleEditor } = this.props;

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (event, gestureState) => {
        if (gestureState.numberActiveTouches >= 2) {
          return toggleEditor();
        }
      },
    });
  }

  renderEditor() {
    const { editing } = this.props;

    if (!editing) {
      return null;
    }

    return (
      <Text>
        Editor: Contains tab bar editor stuff if editing...
      </Text>
    );
  }

  render() {
    return (
      <View
        {...this._panResponder.panHandlers}
        style={{ flex: 1 }}
      >
        <Root/>
        {this.renderEditor()}
      </View>
    );
  }
}
