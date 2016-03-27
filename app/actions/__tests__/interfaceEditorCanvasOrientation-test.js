/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorCanvasOrientation');

import {
  SET_INTERFACE_EDITOR_CANVAS_ORIENTATION,
  setInterfaceEditorCanvasOrientation,

  TOGGLE_INTERFACE_EDITOR_CANVAS_ORIENTATION,
  toggleInterfaceEditorCanvasOrientation,
} from '../interfaceEditorCanvasOrientation';

describe('interfaceEditorCanvasOrientation actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor canvas orientation', () => {
      expect(
        SET_INTERFACE_EDITOR_CANVAS_ORIENTATION
      ).toBeDefined();
    });

    it('should export an action type for toggling interface editor canvas orientation', () => {
      expect(
        TOGGLE_INTERFACE_EDITOR_CANVAS_ORIENTATION
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor canvas orientation', () => {
      const canvasOrientation = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_CANVAS_ORIENTATION,
        canvasOrientation,
      };

      expect(
        setInterfaceEditorCanvasOrientation(canvasOrientation)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for toggling interface editor canvas orientation', () => {
      const expectedAction = {
        type: TOGGLE_INTERFACE_EDITOR_CANVAS_ORIENTATION,
      };

      expect(
        toggleInterfaceEditorCanvasOrientation()
      ).toEqual(expectedAction);
    });
  });
});
