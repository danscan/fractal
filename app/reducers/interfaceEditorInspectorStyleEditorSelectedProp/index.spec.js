/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorStyleEditorSelectedProp,
} from '../../actions/interfaceEditorInspectorStyleEditorSelectedProp';

describe('interfaceEditorInspectorStyleEditorSelectedProp reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorStyleEditorSelectedProp action creator', () => {
    const selectedProp = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorStyleEditorSelectedProp(selectedProp))
    ).toEqual(selectedProp);
  });
});
