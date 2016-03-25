/* global it, describe */
import expect from 'expect';
import {
  SET_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS,
  setInterfaceEditorInspectorTreeNavigatorCollapsedElementPaths,

  TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT,
  toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed,
} from './interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';

describe('interfaceEditorInspectorTreeNavigatorCollapsedElementPaths actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor inspector tree navigator collapsed element paths', () => {
      expect(
        SET_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS
      ).toExist();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor inspector tree navigator collapsed element paths', () => {
      const collapsedSections = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS,
        collapsedSections,
      };

      expect(
        setInterfaceEditorInspectorTreeNavigatorCollapsedElementPaths(collapsedSections)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for toggling an interface editor inspector tree navigator element\'s collapsed state', () => {
      const elementPath = [0, 1];
      const expectedAction = {
        type: TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT,
        elementPath,
      };

      expect(
        toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed(elementPath)
      ).toEqual(expectedAction);
    });
  });
});
