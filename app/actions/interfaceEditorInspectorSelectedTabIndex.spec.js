/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_INSPECTOR_SELECTED_TAB_INDEX,
  setInterfaceEditorInspectorSelectedTabIndex,
} from './interfaceEditorInspectorSelectedTabIndex';

describe('interfaceEditorInspectorSelectedTabIndex actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor inspector selected tab index', () => {
      expect(
        SET_INTERFACE_EDITOR_INSPECTOR_SELECTED_TAB_INDEX
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor inspector selected tab index', () => {
      const selectedTabIndex = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_INSPECTOR_SELECTED_TAB_INDEX,
        selectedTabIndex,
      };

      expect(
        setInterfaceEditorInspectorSelectedTabIndex(selectedTabIndex)
      ).toEqual(expectedAction);
    });
  });
});
