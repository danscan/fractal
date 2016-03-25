import { connect } from 'react-redux';
import { interfaceEditorSelectedComponentTree } from '../../selectors/interfaceEditorComponents';
import { interfaceEditorSelectedComponentKey } from '../../selectors/interfaceEditorSelectedComponentKey';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorInspectorTreeNavigatorCollapsedElementPaths } from '../../selectors/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';
import {
  changeInterfaceEditorComponentElementDisplayName,
  removeInterfaceEditorComponentElement,
  duplicateInterfaceEditorComponentElement,
  moveInterfaceEditorComponentElement,
} from '../../actions/interfaceEditorComponents';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => ({
  collapsedElementPaths: interfaceEditorInspectorTreeNavigatorCollapsedElementPaths(state),
  root: interfaceEditorSelectedComponentTree(state),
  selectedComponentKey: interfaceEditorSelectedComponentKey(state),
  selectedElementPath: interfaceEditorSelectedElementPath(state),
});

const actionCreators = {
  onPressChangeElementDisplayName: changeInterfaceEditorComponentElementDisplayName,
  onPressDeleteElement: removeInterfaceEditorComponentElement,
  onPressDuplicateElement: duplicateInterfaceEditorComponentElement,
  onPressElement: setInterfaceEditorSelectedElementPath,
  // onPressHide: PropTypes.func.isRequired,
  onPressMoveElement: moveInterfaceEditorComponentElement,
};

export default connect(mapStateToProps, actionCreators)(Component);
