/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorSelectedComponentKey');

import {
  SET_INTERFACE_EDITOR_SELECTED_COMPONENT_KEY,
  setInterfaceEditorSelectedComponentKey,
} from '../interfaceEditorSelectedComponentKey';

describe('interfaceEditorSelectedComponentKey actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor selected component key', () => {
      expect(
        SET_INTERFACE_EDITOR_SELECTED_COMPONENT_KEY
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor selected component key', () => {
      const selectedComponentKey = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_SELECTED_COMPONENT_KEY,
        selectedComponentKey,
      };

      expect(
        setInterfaceEditorSelectedComponentKey(selectedComponentKey)
      ).toEqual(expectedAction);
    });
  });
});
