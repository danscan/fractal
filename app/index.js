import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import getStore from './store/index';
import AppToolbarNavigator from './components/AppToolbarNavigator';
import InterfaceEditor from './InterfaceEditor';

export default class App extends Component {
  render() {
    // Get Provider store
    const store = getStore();

    return (
      <Provider store={store}>
        {() => <AppToolbarNavigator scene={<InterfaceEditor/>}/>}
      </Provider>
    );
  }
}
