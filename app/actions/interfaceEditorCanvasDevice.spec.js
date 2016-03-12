/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_CANVAS_DEVICE,
  setInterfaceEditorCanvasDevice,
} from './interfaceEditorCanvasDevice';

describe('interfaceEditorCanvasDevice actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor canvas device', () => {
      expect(
        SET_INTERFACE_EDITOR_CANVAS_DEVICE
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor canvas device', () => {
      const canvasDevice = 1;
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_CANVAS_DEVICE,
        canvasDevice,
      };

      expect(
        setInterfaceEditorCanvasDevice(canvasDevice)
      ).toEqual(expectedAction);
    });
  });
});
