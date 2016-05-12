/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorComponentElement');

import {
  ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD,
  addInterfaceEditorComponentElementChild,

  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  removeInterfaceEditorComponentElement,

  DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  duplicateInterfaceEditorComponentElement,

  MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  moveInterfaceEditorComponentElement,

  CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME,
  changeInterfaceEditorComponentElementDisplayName,

  APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  applyInterfaceEditorComponentElementProp,

  DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  duplicateInterfaceEditorComponentElementProp,

  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  removeInterfaceEditorComponentElementProp,
} from '../interfaceEditorComponentElement';

describe('interfaceEditorComponentElement actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for adding interface editor component element child', () => {
      expect(
        ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD
      ).toBeDefined();
    });

    it('should export an action type for removing interface editor component element', () => {
      expect(
        REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT
      ).toBeDefined();
    });

    it('should export an action type for duplicating interface editor component element', () => {
      expect(
        DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT
      ).toBeDefined();
    });

    it('should export an action type for moving interface editor component element', () => {
      expect(
        MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT
      ).toBeDefined();
    });

    it('should export an action type for changing interface editor component element display name', () => {
      expect(
        CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME
      ).toBeDefined();
    });

    it('should export an action type for applying interface editor component element prop', () => {
      expect(
        APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP
      ).toBeDefined();
    });

    it('should export an action type for duplicating interface editor component element prop', () => {
      expect(
        DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP
      ).toBeDefined();
    });

    it('should export an action type for removing interface editor component element prop', () => {
      expect(
        REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for adding interface editor component element child', () => {
      const elementPath = {};
      const child = {};
      const expectedAction = {
        type: ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD,
        elementPath,
        child,
      };

      expect(
        addInterfaceEditorComponentElementChild(elementPath, child)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for removing interface editor component element', () => {
      const elementPath = {};
      const expectedAction = {
        type: REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
        elementPath,
      };

      expect(
        removeInterfaceEditorComponentElement(elementPath)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for duplicating interface editor component element', () => {
      const elementPath = {};
      const expectedAction = {
        type: DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
        elementPath,
      };

      expect(
        duplicateInterfaceEditorComponentElement(elementPath)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for moving interface editor component element', () => {
      const elementPath = {};
      const desiredParentElementPath = {};
      const expectedAction = {
        type: MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
        elementPath,
        desiredParentElementPath,
      };

      expect(
        moveInterfaceEditorComponentElement(elementPath, desiredParentElementPath)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for changing interface editor component element display name', () => {
      const elementPath = {};
      const newDisplayName = {};
      const expectedAction = {
        type: CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME,
        elementPath,
        newDisplayName,
      };

      expect(
        changeInterfaceEditorComponentElementDisplayName(elementPath, newDisplayName)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for applying interface editor component element prop', () => {
      const elementPath = {};
      const propName = {};
      const propValue = {};
      const expectedAction = {
        type: APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
        elementPath,
        propName,
        propValue,
      };

      expect(
        applyInterfaceEditorComponentElementProp(elementPath, propName, propValue)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for duplicating interface editor component element prop', () => {
      const elementPath = {};
      const propName = {};
      const newPropName = {};
      const expectedAction = {
        type: DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
        elementPath,
        propName,
        newPropName,
      };

      expect(
        duplicateInterfaceEditorComponentElementProp(elementPath, propName, newPropName)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for removing interface editor component element prop', () => {
      const elementPath = {};
      const propName = {};
      const expectedAction = {
        type: REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
        elementPath,
        propName,
      };

      expect(
        removeInterfaceEditorComponentElementProp(elementPath, propName)
      ).toEqual(expectedAction);
    });
  });
});
