import { connect } from 'react-redux';
import { interfaceEditorInspectorStyleEditorSelectedProp } from '../../selectors/interfaceEditorInspectorStyleEditorSelectedProp';
import { setInterfaceEditorInspectorStyleEditorSelectedProp } from '../../actions/interfaceEditorInspectorStyleEditorSelectedProp';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedProp: interfaceEditorInspectorStyleEditorSelectedProp(state),
});

const actionCreators = {
  setSelectedProp: setInterfaceEditorInspectorStyleEditorSelectedProp,
};

export default connect(mapStateToProps, actionCreators)(Component);
