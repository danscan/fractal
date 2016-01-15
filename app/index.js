import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import getStore from './store/index';
import EditorWorkspace from './components/EditorWorkspace';

export default class App extends Component {
  render() {
    // Get Provider store
    const store = getStore();

    return (
      <Provider store={store}>
        {() => <EditorWorkspace/>}
      </Provider>
    );
  }
}
