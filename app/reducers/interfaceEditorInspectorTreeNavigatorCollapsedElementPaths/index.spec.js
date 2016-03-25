/* global it, describe */
import expect from 'expect';
import { Set } from 'immutable';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorStyleEditorInputCollapsedSections,
  toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed,
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

  it('should handle action created by the toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed action creator', () => {
    const elementPath = [0, 1];
    const expectedState = new Set([elementPath]);

    expect(
      reducer(undefined, toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed(elementPath))
    ).toEqual(expectedState);
  });
});
