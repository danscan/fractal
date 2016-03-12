/* global define, it, describe */
import expect from 'expect';
import {
  showAddElementModal,
  hideAddElementModal,
  setSelectedElementPath,
  resetSelectedElementPath,
} from './editor';
import {
  SHOW_ADD_ELEMENT_MODAL,
  HIDE_ADD_ELEMENT_MODAL,
  SET_SELECTED_ELEMENT_PATH,
  RESET_SELECTED_ELEMENT_PATH,
} from '../constants/actionTypes';

describe('interface editor: editor action creators', () => {
  it('should create an action to show add element modal', () => {
    const expectedAction = { type: SHOW_ADD_ELEMENT_MODAL };

    expect(
      showAddElementModal()
    ).toEqual(expectedAction);
  });

  it('should create an action to hide add element modal', () => {
    const expectedAction = { type: HIDE_ADD_ELEMENT_MODAL };

    expect(
      hideAddElementModal()
    ).toEqual(expectedAction);
  });

  it('should create an action to set selected element path', () => {
    const selectedElementPath = {};
    const expectedAction = {
      type: SET_SELECTED_ELEMENT_PATH,
      selectedElementPath,
    };

    expect(
      setSelectedElementPath(selectedElementPath)
    ).toEqual(expectedAction);
  });

  it('should create an action to reset selected element path', () => {
    const expectedAction = { type: RESET_SELECTED_ELEMENT_PATH };

    expect(
      resetSelectedElementPath()
    ).toEqual(expectedAction);
  });
});
