/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_COLLAPSED_SECTIONS,
  setInterfaceEditorInspectorStyleEditorInputCollapsedSections,
} from './interfaceEditorInspectorStyleEditorInputCollapsedSections';

describe('interfaceEditorInspectorStyleEditorInputCollapsedSections actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor inspector style editor input collapsed sections', () => {
      expect(
        SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_COLLAPSED_SECTIONS
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor inspector style editor input collapsed sections', () => {
      const collapsedSections = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_COLLAPSED_SECTIONS,
        collapsedSections,
      };

      expect(
        setInterfaceEditorInspectorStyleEditorInputCollapsedSections(collapsedSections)
      ).toEqual(expectedAction);
    });
  });
});
