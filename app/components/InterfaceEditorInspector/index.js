import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorInspectorSelectedTabIndex } from '../../selectors/interfaceEditorInspectorSelectedTabIndex';
import { setInterfaceEditorInspectorSelectedTabIndex } from '../../actions/interfaceEditorInspectorSelectedTabIndex';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedElement: interfaceEditorSelectedElement(state),
  selectedTab: interfaceEditorInspectorSelectedTabIndex(state),
});

const actionCreators = {
  onSelectTab: setInterfaceEditorInspectorSelectedTabIndex,
};

export default connect(mapStateToProps, actionCreators)(Component);
