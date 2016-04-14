import { connect } from 'react-redux';
import { interfaceEditorComponentTree } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorTreeNavigatorCollapsedElementPaths } from '../../selectors/interfaceEditorTreeNavigatorCollapsedElementPaths';
import {
  changeInterfaceEditorComponentElementDisplayName,
  removeInterfaceEditorComponentElement,
  duplicateInterfaceEditorComponentElement,
  moveInterfaceEditorComponentElement,
} from '../../actions/interfaceEditorComponent';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => ({
  collapsedElementPaths: interfaceEditorTreeNavigatorCollapsedElementPaths(state),
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
