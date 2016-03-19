import { connect } from 'react-redux';
import { interfaceEditorWorkspacePanelModalContent } from '../../selectors/interfaceEditorWorkspacePanelModalContent';
import Component from './component';

const mapStateToProps = (state) => ({
  content: interfaceEditorWorkspacePanelModalContent(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
