/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorPropsEditorSelectedPropName');

import {
  SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME,
  setInterfaceEditorPropsEditorSelectedPropName,
} from '../interfaceEditorPropsEditorSelectedPropName';

describe('interfaceEditorPropsEditorSelectedPropName actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor props editor selected prop name', () => {
      expect(
        SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor props editor selected prop name', () => {
      const propName = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME,
        propName,
      };

      expect(
        setInterfaceEditorPropsEditorSelectedPropName(propName)
      ).toEqual(expectedAction);
    });
  });
});
