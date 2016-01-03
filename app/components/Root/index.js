import React, { Component, Text, View } from 'react-native';

export default class Root extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Text style={{ color: '#666', fontFamily: 'Avenir', fontSize: 20 }}>
          Your app root
        </Text>
      </View>
    );
  }
}
