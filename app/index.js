import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import getStore from './store/index';
import KeyboardAwareView from './components/KeyboardAwareView';
import InterfaceEditor from './components/InterfaceEditor';

const store = getStore();
GLOBAL.store = store;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <KeyboardAwareView animated>
          <InterfaceEditor/>
        </KeyboardAwareView>
      </Provider>
    );
  }
}
