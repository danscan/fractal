import React from 'react-native';
import { connect } from 'react-redux';
import { setInterfaceEditorWorkspacePanelModalContent } from '../../actions/interfaceEditorWorkspacePanelModalContent';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponents';
import { interfaceEditorWorkspacePanelModalContent } from '../../selectors/interfaceEditorWorkspacePanelModalContent';
import InterfaceEditorAddElementPanel from '../InterfaceEditorAddElementPanel';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedElement: interfaceEditorSelectedElement(state),
  workspacePanelModalContent: interfaceEditorWorkspacePanelModalContent(state),
});

const actionCreators = {
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
