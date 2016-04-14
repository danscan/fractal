/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorStyleEditorInputPaddingInputSelectedSides');

import {
  SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES,
  setInterfaceEditorStyleEditorInputPaddingInputSelectedSides,
} from '../interfaceEditorStyleEditorInputPaddingInputSelectedSides';

describe('interfaceEditorStyleEditorInputPaddingInputSelectedSides actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor style editor input padding input selected sides', () => {
      expect(
        SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor style editor input padding input selected sides', () => {
      const selectedSides = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES,
        selectedSides,
      };

      expect(
        setInterfaceEditorStyleEditorInputPaddingInputSelectedSides(selectedSides)
      ).toEqual(expectedAction);
    });
  });
});
