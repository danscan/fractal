/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners');

import {
  SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_CORNERS_INPUT_SELECTED_CORNERS,
  setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners,
} from '../interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners';

describe('interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor inspector style editor input border corners input selected corners', () => {
      expect(
        SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_CORNERS_INPUT_SELECTED_CORNERS
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor inspector style editor input border corners input selected corners', () => {
      const selectedCorners = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_CORNERS_INPUT_SELECTED_CORNERS,
        selectedCorners,
      };

      expect(
        setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners(selectedCorners)
      ).toEqual(expectedAction);
    });
  });
});
