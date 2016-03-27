import React from 'react-native';
import { connect } from 'react-redux';
import {
  redoInterfaceEditorComponentAction,
  undoInterfaceEditorComponentAction,
} from '../../actions/interfaceEditorComponent';
import { setInterfaceEditorWorkspacePanelModalContent } from '../../actions/interfaceEditorWorkspacePanelModalContent';
import {
  canRedoInterfaceEditorComponentAction,
  canUndoInterfaceEditorComponentAction,
  interfaceEditorSelectedElement,
} from '../../selectors/interfaceEditorComponent';
import { interfaceEditorWorkspacePanelModalContent } from '../../selectors/interfaceEditorWorkspacePanelModalContent';
import InterfaceEditorAddElementPanel from '../InterfaceEditorAddElementPanel';
import Component from './component';

const mapStateToProps = (state) => ({
  canRedo: canRedoInterfaceEditorComponentAction(state),
  canUndo: canUndoInterfaceEditorComponentAction(state),
  selectedElement: interfaceEditorSelectedElement(state),
  workspacePanelModalContent: interfaceEditorWorkspacePanelModalContent(state),
});

const actionCreators = {
  onPressRedo: redoInterfaceEditorComponentAction,
  onPressUndo: undoInterfaceEditorComponentAction,
  setInterfaceEditorWorkspacePanelModalContent,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const workspacePanelModalContent = stateProps.workspacePanelModalContent || {};
  const isShowingAddElementPanel = workspacePanelModalContent.type === InterfaceEditorAddElementPanel;
  const onPressAddElement = isShowingAddElementPanel
    ? () => dispatchProps.setInterfaceEditorWorkspacePanelModalContent(null)
    : () => dispatchProps.setInterfaceEditorWorkspacePanelModalContent(<InterfaceEditorAddElementPanel/>);

  return {
    ...stateProps,
    ...dispatchProps,
    isShowingAddElementPanel,
    onPressAddElement,
    ...ownProps,
  };
};

export default connect(mapStateToProps, actionCreators, mergeProps)(Component);
