/* global it, describe, expect, jest */
jest.unmock('immutable');
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths');

import { Set } from 'immutable';
import reducer, { initialState } from '../';
import {
  setInterfaceEditorInspectorTreeNavigatorCollapsedElementPaths,
  toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed,
} from '../../../actions/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';

describe('interfaceEditorInspectorTreeNavigatorCollapsedElementPaths reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorStyleEditorInputCollapsedElementPaths action creator', () => {
    const collapsedElementPaths = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorTreeNavigatorCollapsedElementPaths(collapsedElementPaths))
    ).toEqual(collapsedElementPaths);
  });

  it('should handle action created by the toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed action creator', () => {
    const elementPath = [0, 1];
    const expectedState = new Set([elementPath]);

    expect(
      reducer(undefined, toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed(elementPath))
        .equals(expectedState)
    ).toBeTruthy();
  });
});
