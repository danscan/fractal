import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorInspectorStyleEditorSelectedProp } from '../../selectors/interfaceEditorInspectorStyleEditorSelectedProp';
import { setInterfaceEditorInspectorStyleEditorSelectedProp } from '../../actions/interfaceEditorInspectorStyleEditorSelectedProp';
import Component from './component';

const mapStateToProps = (state) => ({
  propTypes: interfaceEditorSelectedElement(state).get('type').propTypes,
  selectedProp: interfaceEditorInspectorStyleEditorSelectedProp(state),
});

const actionCreators = {
  setSelectedProp: setInterfaceEditorInspectorStyleEditorSelectedProp,
};

export default connect(mapStateToProps, actionCreators)(Component);
