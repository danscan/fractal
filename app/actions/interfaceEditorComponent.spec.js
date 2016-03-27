/* global it, describe */
import expect from 'expect';
import {
  ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD,
  addInterfaceEditorComponentTreeElementChild,

  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  removeInterfaceEditorComponentTreeElement,

  DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  duplicateInterfaceEditorComponentTreeElement,

  MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  moveInterfaceEditorComponentTreeElement,

  CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME,
  changeInterfaceEditorComponentTreeElementDisplayName,

  APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  applyInterfaceEditorComponentTreeElementProp,

  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  removeInterfaceEditorComponentTreeElementProp,

  UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  undoInterfaceEditorComponentAction,

  REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  redoInterfaceEditorComponentAction,
} from './interfaceEditorComponent';

describe('interfaceEditorComponent actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for adding interface editor component element child', () => {
      expect(
        ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD
      ).toExist();
    });

    it('should export an action type for removing interface editor component element', () => {
      expect(
        REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT
      ).toExist();
    });

    it('should export an action type for duplicating interface editor component element', () => {
      expect(
        DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT
      ).toExist();
    });

    it('should export an action type for moving interface editor component element', () => {
      expect(
        MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT
      ).toExist();
    });

    it('should export an action type for changing interface editor component element display name', () => {
      expect(
        CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME
      ).toExist();
    });

    it('should export an action type for applying interface editor component element prop', () => {
      expect(
        APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP
      ).toExist();
    });

    it('should export an action type for removing interface editor component element prop', () => {
      expect(
        REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP
      ).toExist();
    });

    it('should export an action type for undoing interface editor component action', () => {
      expect(
        UNDO_INTERFACE_EDITOR_COMPONENT_ACTION
      ).toExist();
    });

    it('should export an action type for redoing interface editor component action', () => {
      expect(
        REDO_INTERFACE_EDITOR_COMPONENT_ACTION
      ).toExist();
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
        addInterfaceEditorComponentTreeElementChild(elementPath, child)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for removing interface editor component element', () => {
      const elementPath = {};
      const expectedAction = {
        type: REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
        elementPath,
      };

      expect(
        removeInterfaceEditorComponentTreeElement(elementPath)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for duplicating interface editor component element', () => {
      const elementPath = {};
      const expectedAction = {
        type: DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
        elementPath,
      };

      expect(
        duplicateInterfaceEditorComponentTreeElement(elementPath)
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
        moveInterfaceEditorComponentTreeElement(elementPath, desiredParentElementPath)
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
        changeInterfaceEditorComponentTreeElementDisplayName(elementPath, newDisplayName)
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
        applyInterfaceEditorComponentTreeElementProp(elementPath, propName, propValue)
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
        removeInterfaceEditorComponentTreeElementProp(elementPath, propName)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for undoing interface editor component action', () => {
      const componentKey = {};
      const expectedAction = {
        type: UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,
        componentKey,
      };

      expect(
        undoInterfaceEditorComponentAction(componentKey)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for redoing interface editor component action', () => {
      const componentKey = {};
      const expectedAction = {
        type: REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
        componentKey,
      };

      expect(
        redoInterfaceEditorComponentAction(componentKey)
      ).toEqual(expectedAction);
    });
  });
});
