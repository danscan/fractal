/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorPropsEditorSelectedProp');

import {
  SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP,
  setInterfaceEditorPropsEditorSelectedProp,
} from '../interfaceEditorPropsEditorSelectedProp';

describe('interfaceEditorPropsEditorSelectedProp actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor props editor selected prop', () => {
      expect(
        SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor props editor selected prop', () => {
      const selectedProp = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP,
        selectedProp,
      };

      expect(
        setInterfaceEditorPropsEditorSelectedProp(selectedProp)
      ).toEqual(expectedAction);
    });
  });
});
