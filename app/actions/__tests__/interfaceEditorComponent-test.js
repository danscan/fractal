/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorComponent');

import {
  UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  undoInterfaceEditorComponentAction,

  REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  redoInterfaceEditorComponentAction,
} from '../interfaceEditorComponent';

describe('interfaceEditorComponent actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for undoing interface editor component action', () => {
      expect(
        UNDO_INTERFACE_EDITOR_COMPONENT_ACTION
      ).toBeDefined();
    });

    it('should export an action type for redoing interface editor component action', () => {
      expect(
        REDO_INTERFACE_EDITOR_COMPONENT_ACTION
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for undoing interface editor component action', () => {
      const expectedAction = {
        type: UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,
      };

      expect(
        undoInterfaceEditorComponentAction()
      ).toEqual(expectedAction);
    });

    it('should export an action creator for redoing interface editor component action', () => {
      const expectedAction = {
        type: REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
      };

      expect(
        redoInterfaceEditorComponentAction()
      ).toEqual(expectedAction);
    });
  });
});
