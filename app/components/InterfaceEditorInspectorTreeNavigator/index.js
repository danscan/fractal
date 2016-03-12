import { connect } from 'react-redux';
import { interfaceEditorSelectedComponentTree } from '../../selectors/interfaceEditorComponents';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => ({
  root: interfaceEditorSelectedComponentTree(state),
  selectedElementPath: interfaceEditorSelectedElementPath(state),
});

const actionCreators = {
  onPressElement: setInterfaceEditorSelectedElementPath,
};

export default connect(mapStateToProps, actionCreators)(Component);
