/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides,
} from '../../actions/interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides';

describe('interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides action creator', () => {
    const selectedSides = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides(selectedSides))
    ).toEqual(selectedSides);
  });
});
