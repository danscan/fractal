/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorSelectedComponentKey,
} from '../../actions/interfaceEditorSelectedComponentKey';

describe('interfaceEditorSelectedComponentKey reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorSelectedComponentKey action creator', () => {
    const selectedComponentKey = {};

    expect(
      reducer(undefined, setInterfaceEditorSelectedComponentKey(selectedComponentKey))
    ).toEqual(selectedComponentKey);
  });
});
