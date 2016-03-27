import { connect } from 'react-redux';
import { AlertIOS } from 'react-native';
import { changeInterfaceEditorComponentElementDisplayName } from '../../actions/interfaceEditorComponent';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';
import { toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed } from '../../actions/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';
import { interfaceEditorInspectorTreeNavigatorCollapsedElementPaths } from '../../selectors/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  isCollapsed: interfaceEditorInspectorTreeNavigatorCollapsedElementPaths(state).has(ownProps.elementPath),
  isSelected: interfaceEditorSelectedElementPath(state).equals(ownProps.elementPath),
});

const actionCreators = (dispatch, ownProps) => ({
  onPress: () => dispatch(setInterfaceEditorSelectedElementPath(ownProps.elementPath)),
  onPressEdit: () => {
    return AlertIOS.prompt(
      `Enter new display name.`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Set Display Name',
          onPress: (newDisplayName) => dispatch(changeInterfaceEditorComponentElementDisplayName(ownProps.elementPath, newDisplayName)),
        },
      ],
    );
  },
  onPressToggleCollapsed: () => dispatch(toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed(ownProps.elementPath)),
});

export default connect(mapStateToProps, actionCreators)(Component);
