/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorSelectedElementPath,
} from '../../actions/interfaceEditorSelectedElementPath';

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
});
