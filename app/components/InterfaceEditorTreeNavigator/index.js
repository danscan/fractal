import { connect } from 'react-redux';
import { interfaceEditorComponentElementTree } from '../../selectors/interfaceEditorComponentElement';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import {
  changeInterfaceEditorComponentElementDisplayName,
  removeInterfaceEditorComponentElement,
  duplicateInterfaceEditorComponentElement,
  moveInterfaceEditorComponentElement,
} from '../../actions/interfaceEditorComponentElement';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => ({
  root: interfaceEditorComponentElementTree(state),
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
