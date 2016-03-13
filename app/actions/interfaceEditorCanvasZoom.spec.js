/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_CANVAS_ZOOM,
  setInterfaceEditorCanvasZoom,
} from './interfaceEditorCanvasZoom';

describe('interfaceEditorCanvasZoom actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor canvas zoom', () => {
      expect(
        SET_INTERFACE_EDITOR_CANVAS_ZOOM
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor canvas zoom', () => {
      const canvasZoom = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_CANVAS_ZOOM,
        canvasZoom,
      };

      expect(
        setInterfaceEditorCanvasZoom(canvasZoom)
      ).toEqual(expectedAction);
    });
  });
});