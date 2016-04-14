/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorTreeNavigatorCollapsedElementPaths');

import {
  SET_INTERFACE_EDITOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS,
  setInterfaceEditorTreeNavigatorCollapsedElementPaths,

  TOGGLE_INTERFACE_EDITOR_TREE_NAVIGATOR_ELEMENT,
  toggleInterfaceEditorTreeNavigatorElementCollapsed,
} from '../interfaceEditorTreeNavigatorCollapsedElementPaths';

describe('interfaceEditorTreeNavigatorCollapsedElementPaths actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor tree navigator collapsed element paths', () => {
      expect(
        SET_INTERFACE_EDITOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor tree navigator collapsed element paths', () => {
      const collapsedElementPaths = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS,
        collapsedElementPaths,
      };

      expect(
        setInterfaceEditorTreeNavigatorCollapsedElementPaths(collapsedElementPaths)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for toggling an interface editor tree navigator element\'s collapsed state', () => {
      const elementPath = [0, 1];
      const expectedAction = {
        type: TOGGLE_INTERFACE_EDITOR_TREE_NAVIGATOR_ELEMENT,
        elementPath,
      };

      expect(
        toggleInterfaceEditorTreeNavigatorElementCollapsed(elementPath)
      ).toEqual(expectedAction);
    });
  });
});
