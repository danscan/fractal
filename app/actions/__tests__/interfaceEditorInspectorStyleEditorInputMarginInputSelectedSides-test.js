/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides');

import {
  SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_MARGIN_INPUT_SELECTED_SIDES,
  setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides,
} from '../interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides';

describe('interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor inspector style editor input margin input selected sides', () => {
      expect(
        SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_MARGIN_INPUT_SELECTED_SIDES
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor inspector style editor input margin input selected sides', () => {
      const selectedSides = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_MARGIN_INPUT_SELECTED_SIDES,
        selectedSides,
      };

      expect(
        setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides(selectedSides)
      ).toEqual(expectedAction);
    });
  });
});
