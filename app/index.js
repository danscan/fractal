import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import getStore from './store/index';
import KeyboardAwareView from './components/KeyboardAwareView';
import AppToolbarNavigator from './components/AppToolbarNavigator';
import InterfaceEditor from './components/InterfaceEditor';

export default class App extends Component {
  render() {
    // Get Provider store
    const store = getStore();

    return (
      <Provider store={store}>
        <KeyboardAwareView animated>
          <AppToolbarNavigator scene={<InterfaceEditor/>}/>
        </KeyboardAwareView>
      </Provider>
    );
  }
}
