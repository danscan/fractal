/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorStyleEditorSelectedSizeClasses,
} from '../../actions/interfaceEditorInspectorStyleEditorSelectedSizeClasses';

describe('interfaceEditorInspectorStyleEditorSelectedSizeClasses reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorStyleEditorSelectedSizeClasses action creator', () => {
    const selectedSizeClasses = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorStyleEditorSelectedSizeClasses(selectedSizeClasses))
    ).toEqual(selectedSizeClasses);
  });
});
