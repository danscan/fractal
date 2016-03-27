/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorInspectorStyleEditorSelectedProp');

import {
  SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_PROP,
  setInterfaceEditorInspectorStyleEditorSelectedProp,
} from '../interfaceEditorInspectorStyleEditorSelectedProp';

describe('interfaceEditorInspectorStyleEditorSelectedProp actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor inspector style editor selected prop', () => {
      expect(
        SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_PROP
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor inspector style editor selected prop', () => {
      const selectedProp = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_PROP,
        selectedProp,
      };

      expect(
        setInterfaceEditorInspectorStyleEditorSelectedProp(selectedProp)
      ).toEqual(expectedAction);
    });
  });
});
