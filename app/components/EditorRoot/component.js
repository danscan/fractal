import React, { Component, PropTypes, StatusBarIOS } from 'react-native';
import EditorToggleGestureInterceptor from '../EditorToggleGestureInterceptor';
import EditorToolbar from '../EditorToolbar';
import EditorModalNavigator from '../EditorModalNavigator';
import Root from '../Root';

// (Configuration constants)
const STATUS_BAR_STYLE = 'light-content';

export default class EditorRoot extends Component {
  static propTypes = {
    showEditor: PropTypes.bool.isRequired,
    toggleEditor: PropTypes.func.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setStyle(STATUS_BAR_STYLE);
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
