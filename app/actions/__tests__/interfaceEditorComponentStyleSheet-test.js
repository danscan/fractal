/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorComponentStyleSheet');

import {
  SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
  setInterfaceEditorComponentStyleSheetStyle,
} from '../interfaceEditorComponentStyleSheet';

describe('interfaceEditorComponentStyleSheet actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor component style sheet style', () => {
      expect(
        SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor component style sheet style', () => {
      const styleName = 'test';
      const styleValue = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
        styleName,
        styleValue,
      };

      expect(
        setInterfaceEditorComponentStyleSheetStyle(styleName, styleValue)
      ).toEqual(expectedAction);
    });
  });
});
