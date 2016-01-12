import React, { Component, PropTypes, StatusBarIOS } from 'react-native';
import EditorToggleGestureInterceptor from '../EditorToggleGestureInterceptor';
import EditorToolbar from '../EditorToolbar';
import EditorModalNavigator from '../EditorModalNavigator';
import Root from '../Root';

// (Configuration constants)
const ANIMATE_STATUS_BAR_TOGGLE = false;

export default class EditorRoot extends Component {
  static propTypes = {
    showEditor: PropTypes.bool.isRequired,
    toggleEditor: PropTypes.func.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setHidden(true, ANIMATE_STATUS_BAR_TOGGLE);
  }

  componentWillUnmount() {
    StatusBarIOS.setHidden(false, ANIMATE_STATUS_BAR_TOGGLE);
  }

  renderEditorToolbar() {
    const { showEditor } = this.props;

    return showEditor
            ? <EditorToolbar/>
            : null;
  }

  render() {
    const {
      toggleEditor,
    } = this.props;

    return (
      <EditorToggleGestureInterceptor toggleEditor={toggleEditor}>
        {this.renderEditorToolbar()}
        <Root/>
        <EditorModalNavigator/>
      </EditorToggleGestureInterceptor>
    );
  }
}
