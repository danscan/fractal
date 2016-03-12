/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_SIZE_CLASSES,
  setInterfaceEditorInspectorStyleEditorSelectedSizeClasses,
} from './interfaceEditorInspectorStyleEditorSelectedSizeClasses';

describe('interfaceEditorInspectorStyleEditorSelectedSizeClasses actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor inspector style editor selected size classes', () => {
      expect(
        SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_SIZE_CLASSES
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor inspector style editor selected size classes', () => {
      const selectedSizeClasses = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_SIZE_CLASSES,
        selectedSizeClasses,
      };

      expect(
        setInterfaceEditorInspectorStyleEditorSelectedSizeClasses(selectedSizeClasses)
      ).toEqual(expectedAction);
    });
  });
});
