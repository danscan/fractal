/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_DIRECT_SELECT_MODE_ENABLED,
  setInterfaceEditorDirectSelectModeEnabled,
} from './interfaceEditorDirectSelectModeEnabled';

describe('interfaceEditorDirectSelectModeEnabled actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor direct select mode enabled', () => {
      expect(
        SET_INTERFACE_EDITOR_DIRECT_SELECT_MODE_ENABLED
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor direct select mode enabled', () => {
      const directSelectModeEnabled = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_DIRECT_SELECT_MODE_ENABLED,
        directSelectModeEnabled,
      };

      expect(
        setInterfaceEditorDirectSelectModeEnabled(directSelectModeEnabled)
      ).toEqual(expectedAction);
    });
  });
});
