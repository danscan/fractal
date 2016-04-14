/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorStyleEditorSelectedProp');

import {
  SET_INTERFACE_EDITOR_STYLE_EDITOR_SELECTED_PROP,
  setInterfaceEditorStyleEditorSelectedProp,
} from '../interfaceEditorStyleEditorSelectedProp';

describe('interfaceEditorStyleEditorSelectedProp actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor style editor selected prop', () => {
      expect(
        SET_INTERFACE_EDITOR_STYLE_EDITOR_SELECTED_PROP
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor style editor selected prop', () => {
      const selectedProp = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_STYLE_EDITOR_SELECTED_PROP,
        selectedProp,
      };

      expect(
        setInterfaceEditorStyleEditorSelectedProp(selectedProp)
      ).toEqual(expectedAction);
    });
  });
});
