import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import getStore from './store/index';
import Editor from './components/Editor';
import Root from './components/Root';

export default class App extends Component {
  render() {
    // Get Provider store
    const store = getStore();

    return (
      <Provider store={store}>
        {() => <Editor root={<Root/>}/>}
      </Provider>
    );
  }
}
