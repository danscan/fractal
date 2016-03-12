/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorSelectedTabIndex,
} from '../../actions/interfaceEditorInspectorSelectedTabIndex';

describe('interfaceEditorInspectorSelectedTabIndex reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorSelectedTabIndex action creator', () => {
    const selectedTabIndex = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorSelectedTabIndex(selectedTabIndex))
    ).toEqual(selectedTabIndex);
  });
});
