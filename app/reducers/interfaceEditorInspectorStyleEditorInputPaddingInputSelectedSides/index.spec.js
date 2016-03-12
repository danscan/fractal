/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides,
} from '../../actions/interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides';

describe('interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides action creator', () => {
    const selectedSides = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides(selectedSides))
    ).toEqual(selectedSides);
  });
});
