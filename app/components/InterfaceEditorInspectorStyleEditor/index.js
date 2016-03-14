import { connect } from 'react-redux';
import { interfaceEditorInspectorStyleEditorSelectedProp } from '../../selectors/interfaceEditorInspectorStyleEditorSelectedProp';
import { interfaceEditorInspectorStyleEditorSelectedSizeClasses } from '../../selectors/interfaceEditorInspectorStyleEditorSelectedSizeClasses';
import { setInterfaceEditorInspectorStyleEditorSelectedProp } from '../../actions/interfaceEditorInspectorStyleEditorSelectedProp';
import { setInterfaceEditorInspectorStyleEditorSelectedSizeClasses } from '../../actions/interfaceEditorInspectorStyleEditorSelectedSizeClasses';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedProp: interfaceEditorInspectorStyleEditorSelectedProp(state),
  selectedSizeClasses: interfaceEditorInspectorStyleEditorSelectedSizeClasses(state),
});

const actionCreators = {
  setSelectedProp: setInterfaceEditorInspectorStyleEditorSelectedProp,
  setSelectedSizeClasses: setInterfaceEditorInspectorStyleEditorSelectedSizeClasses,
};

export default connect(mapStateToProps, actionCreators)(Component);
