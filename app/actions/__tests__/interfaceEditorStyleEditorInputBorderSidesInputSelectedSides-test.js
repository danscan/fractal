/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorStyleEditorInputBorderSidesInputSelectedSides');

import {
  SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_BORDER_SIDES_INPUT_SELECTED_SIDES,
  setInterfaceEditorStyleEditorInputBorderSidesInputSelectedSides,
} from '../interfaceEditorStyleEditorInputBorderSidesInputSelectedSides';

describe('interfaceEditorStyleEditorInputBorderSidesInputSelectedSides actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor style editor input border sides input selected sides', () => {
      expect(
        SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_BORDER_SIDES_INPUT_SELECTED_SIDES
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor style editor input border sides input selected sides', () => {
      const selectedSides = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_BORDER_SIDES_INPUT_SELECTED_SIDES,
        selectedSides,
      };

      expect(
        setInterfaceEditorStyleEditorInputBorderSidesInputSelectedSides(selectedSides)
      ).toEqual(expectedAction);
    });
  });
});
