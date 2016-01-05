import React, { Component, PropTypes } from 'react-native';
import ToggleGestureInterceptor from './ToggleGestureInterceptor';
import Toolbar from './Toolbar';
import Tree from './Tree';
import Root from '../Root';

export default class Editor extends Component {
  static propTypes = {
    editing: PropTypes.bool.isRequired,
    toggleEditor: PropTypes.func.isRequired,
  }

  renderToolbar() {
    const { editing } = this.props;

    return editing
            ? <Toolbar/>
            : null;
  }

  render() {
    const {
      toggleEditor,
    } = this.props;

    return (
      <ToggleGestureInterceptor toggleEditor={toggleEditor}>
        {this.renderToolbar()}
        <Root/>
        <Tree/>
      </ToggleGestureInterceptor>
    );
  }
}
