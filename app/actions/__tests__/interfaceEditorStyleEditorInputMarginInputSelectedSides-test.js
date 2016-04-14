/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorStyleEditorInputMarginInputSelectedSides');

import {
  SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_MARGIN_INPUT_SELECTED_SIDES,
  setInterfaceEditorStyleEditorInputMarginInputSelectedSides,
} from '../interfaceEditorStyleEditorInputMarginInputSelectedSides';

describe('interfaceEditorStyleEditorInputMarginInputSelectedSides actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor style editor input margin input selected sides', () => {
      expect(
        SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_MARGIN_INPUT_SELECTED_SIDES
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor style editor input margin input selected sides', () => {
      const selectedSides = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_MARGIN_INPUT_SELECTED_SIDES,
        selectedSides,
      };

      expect(
        setInterfaceEditorStyleEditorInputMarginInputSelectedSides(selectedSides)
      ).toEqual(expectedAction);
    });
  });
});
