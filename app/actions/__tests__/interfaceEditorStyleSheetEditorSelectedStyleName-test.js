/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorStyleSheetEditorSelectedStyleName');

import {
  SET_INTERFACE_EDITOR_STYLE_SHEET_EDITOR_SELECTED_STYLE_NAME,
  setInterfaceEditorStyleSheetEditorSelectedStyleName,
} from '../interfaceEditorStyleSheetEditorSelectedStyleName';

describe('interfaceEditorStyleSheetEditorSelectedStyleName actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor style sheet editor selected style name', () => {
      expect(
        SET_INTERFACE_EDITOR_STYLE_SHEET_EDITOR_SELECTED_STYLE_NAME
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor style sheet editor selected style name', () => {
      const styleName = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_STYLE_SHEET_EDITOR_SELECTED_STYLE_NAME,
        styleName,
      };

      expect(
        setInterfaceEditorStyleSheetEditorSelectedStyleName(styleName)
      ).toEqual(expectedAction);
    });
  });
});
