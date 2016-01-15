import React, { Component, PropTypes, StatusBarIOS } from 'react-native';
import EditorToggleGestureInterceptor from '../EditorToggleGestureInterceptor';
import EditorToolbar from '../EditorToolbar';
import EditorModalNavigator from '../EditorModalNavigator';
import Root from '../Root';

// (Configuration constants)
const STATUS_BAR_STYLE = 'light-content';

export default class EditorWorkspace extends Component {
  static propTypes = {
    beginPreview: PropTypes.func.isRequired,
    endPreview: PropTypes.func.isRequired,
    preview: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setStyle(STATUS_BAR_STYLE);
  }

  renderEditorToolbar() {
    const { preview } = this.props;

    return preview
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
