/* global it, describe */
import expect from 'expect';
import { List } from 'immutable';
import reducer, { initialState } from './';
import {
  removeInterfaceEditorComponentElement,
  moveInterfaceEditorComponentElement,
} from '../../actions/interfaceEditorComponent';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';

describe('interfaceEditorSelectedElementPath reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorSelectedElementPath action creator', () => {
    const selectedElementPath = {};

    expect(
      reducer(undefined, setInterfaceEditorSelectedElementPath(selectedElementPath))
    ).toEqual(selectedElementPath);
  });

  it('should handle action created by the removeInterfaceEditorComponentElement action creator', () => {
    const selectedElementPath = new List([0, 1]);
    const expectedNewSelectedElementPath = selectedElementPath.pop();

    expect(
      reducer(selectedElementPath, removeInterfaceEditorComponentElement(selectedElementPath))
    ).toEqual(expectedNewSelectedElementPath);
  });

  it('should handle action created by the moveInterfaceEditorComponentElement action creator', () => {
    const selectedElementPath = new List([0, 1]);
    const desiredParentElementPath = new List([1]);

    expect(
      reducer(selectedElementPath, moveInterfaceEditorComponentElement(selectedElementPath, desiredParentElementPath))
    ).toEqual(desiredParentElementPath);
  });
});
