import { connect } from 'react-redux';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';
import { toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed } from '../../actions/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';
import { interfaceEditorInspectorTreeNavigatorCollapsedElementPaths } from '../../selectors/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  isCollapsed: interfaceEditorInspectorTreeNavigatorCollapsedElementPaths(state).has(ownProps.elementPath),
});

const actionCreators = (dispatch, ownProps) => ({
  onPress: () => dispatch(setInterfaceEditorSelectedElementPath(ownProps.elementPath)),
  onPressToggleCollapsed: () => dispatch(toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed(ownProps.elementPath)),
});

export default connect(mapStateToProps, actionCreators)(Component);
