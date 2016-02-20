/* global define, it, describe */
import expect from 'expect';
import {
  addElementChild,
  removeElement,
  duplicateElement,
  moveElement,
  hideElement,
  changeElementDisplayName,
  applyElementProp,
  removeElementProp,
  redoTreeAction,
  undoTreeAction,
} from './tree';
import {
  ADD_ELEMENT_CHILD,
  REMOVE_ELEMENT,
  DUPLICATE_ELEMENT,
  MOVE_ELEMENT,
  HIDE_ELEMENT,
  CHANGE_ELEMENT_DISPLAY_NAME,
  APPLY_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
  REDO_TREE_ACTION,
  UNDO_TREE_ACTION,
} from '../constants/actionTypes';

describe('interface editor: tree action creators', () => {
  it('should create an action to add element child', () => {
    const elementPath = {};
    const child = {};
    const expectedAction = {
      type: ADD_ELEMENT_CHILD,
      elementPath,
      child,
    };

    expect(
      addElementChild(elementPath, child)
    ).toEqual(expectedAction);
  });

  it('should create an action to remove element', () => {
    const elementPath = {};
    const expectedAction = {
      type: REMOVE_ELEMENT,
      elementPath,
    };

    expect(
      removeElement(elementPath)
    ).toEqual(expectedAction);
  });

  it('should create an action to duplicate element', () => {
    const elementPath = {};
    const expectedAction = {
      type: DUPLICATE_ELEMENT,
      elementPath,
    };

    expect(
      duplicateElement(elementPath)
    ).toEqual(expectedAction);
  });

  it('should create an action to move element', () => {
    const elementPath = {};
    const desiredParentElementPath = {};
    const expectedAction = {
      type: MOVE_ELEMENT,
      elementPath,
      desiredParentElementPath
    };

    expect(
      moveElement(elementPath, desiredParentElementPath)
    ).toEqual(expectedAction);
  });

  it('should create an action to hide element', () => {
    const elementPath = {};
    const expectedAction = {
      type: HIDE_ELEMENT,
      elementPath,
    };

    expect(
      hideElement(elementPath)
    ).toEqual(expectedAction);
  });

  it('should create an action to change element display name', () => {
    const elementPath = {};
    const newDisplayName = 'MyView';
    const expectedAction = {
      type: CHANGE_ELEMENT_DISPLAY_NAME,
      elementPath,
      newDisplayName,
    };

    expect(
      changeElementDisplayName(elementPath, newDisplayName)
    ).toEqual(expectedAction);
  });

  it('should create an action to apply element prop', () => {
    const elementPath = {};
    const propName = 'style';
    const propValue = {};
    const expectedAction = {
      type: APPLY_ELEMENT_PROP,
      elementPath,
      propName,
      propValue,
    };

    expect(
      applyElementProp(elementPath, propName, propValue)
    ).toEqual(expectedAction);
  });

  it('should create an action to remove element prop', () => {
    const elementPath = {};
    const propName = 'style';
    const expectedAction = {
      type: REMOVE_ELEMENT_PROP,
      elementPath,
      propName,
    };

    expect(
      removeElementProp(elementPath, propName)
    ).toEqual(expectedAction);
  });

  it('should create an action to undo tree action', () => {
    const expectedAction = { type: UNDO_TREE_ACTION };

    expect(
      undoTreeAction()
    ).toEqual(expectedAction);
  });

  it('should create an action to redo tree action', () => {
    const expectedAction = { type: REDO_TREE_ACTION };

    expect(
      redoTreeAction()
    ).toEqual(expectedAction);
  });
});
