/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorStyleEditorInputCollapsedSections,
} from '../../actions/interfaceEditorInspectorStyleEditorInputCollapsedSections';

describe('interfaceEditorInspectorStyleEditorInputCollapsedSections reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorStyleEditorInputCollapsedSections action creator', () => {
    const collapsedSections = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorStyleEditorInputCollapsedSections(collapsedSections))
    ).toEqual(collapsedSections);
  });
});
