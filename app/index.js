import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import getStore from './store/index';
import EditorRoot from './components/EditorRoot';

export default class App extends Component {
  render() {
    // Get Provider store
    const store = getStore();

    return (
      <Provider store={store}>
        {() => <EditorRoot/>}
      </Provider>
    );
  }
}
