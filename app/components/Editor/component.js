import React, { Component, PropTypes, StatusBarIOS } from 'react-native';
import ToggleGestureInterceptor from './ToggleGestureInterceptor';
import Toolbar from './Toolbar';
import Tree from './Tree';
import Root from '../Root';

// (Configuration constants)
const ANIMATE_STATUS_BAR_TOGGLE = false;

export default class Editor extends Component {
  static propTypes = {
    editing: PropTypes.bool.isRequired,
    toggleEditor: PropTypes.func.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setHidden(true, ANIMATE_STATUS_BAR_TOGGLE);
  }

  componentWillUnmount() {
    StatusBarIOS.setHidden(false, ANIMATE_STATUS_BAR_TOGGLE);
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
