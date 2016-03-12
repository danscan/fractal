/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH,
  setInterfaceEditorSelectedElementPath,
} from './interfaceEditorSelectedElementPath';

describe('interfaceEditorSelectedElementPath actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor selected element path', () => {
      expect(
        SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor selected element path', () => {
      const selectedElementPath = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH,
        selectedElementPath,
      };

      expect(
        setInterfaceEditorSelectedElementPath(selectedElementPath)
      ).toEqual(expectedAction);
    });
  });
});
