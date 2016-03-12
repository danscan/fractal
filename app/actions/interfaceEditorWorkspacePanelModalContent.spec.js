/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_WORKSPACE_PANEL_MODAL_CONTENT,
  setInterfaceEditorWorkspacePanelModalContent,
} from './interfaceEditorWorkspacePanelModalContent';

describe('interfaceEditorWorkspacePanelModalContent actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor workspace panel modal content', () => {
      expect(
        SET_INTERFACE_EDITOR_WORKSPACE_PANEL_MODAL_CONTENT
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor workspace panel modal content', () => {
      const modalContent = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_WORKSPACE_PANEL_MODAL_CONTENT,
        modalContent,
      };

      expect(
        setInterfaceEditorWorkspacePanelModalContent(modalContent)
      ).toEqual(expectedAction);
    });
  });
});
