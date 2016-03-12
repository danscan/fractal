/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_CANVAS_ORIENTATION,
  setInterfaceEditorCanvasOrientation,
} from './interfaceEditorCanvasOrientation';

describe('interfaceEditorCanvasOrientation actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor canvas orientation', () => {
      expect(
        SET_INTERFACE_EDITOR_CANVAS_ORIENTATION
      ).toExist();
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
  });
});
