import { connect } from 'react-redux';
import { interfaceEditorComponentTree } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorInspectorTreeNavigatorCollapsedElementPaths } from '../../selectors/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';
import {
  changeInterfaceEditorComponentElementDisplayName,
  removeInterfaceEditorComponentElement,
  duplicateInterfaceEditorComponentElement,
  moveInterfaceEditorComponentElement,
} from '../../actions/interfaceEditorComponent';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => ({
  collapsedElementPaths: interfaceEditorInspectorTreeNavigatorCollapsedElementPaths(state),
  root: interfaceEditorComponentTree(state),
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
