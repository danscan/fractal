import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponents';
import { interfaceEditorInspectorSelectedTabIndex } from '../../selectors/interfaceEditorInspectorSelectedTabIndex';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedElement: interfaceEditorSelectedElement(state),
  selectedTab: interfaceEditorInspectorSelectedTabIndex(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
