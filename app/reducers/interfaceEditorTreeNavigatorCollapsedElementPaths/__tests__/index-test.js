/* global it, describe, expect, jest */
jest.unmock('immutable');
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorTreeNavigatorCollapsedElementPaths');

import { Set } from 'immutable';
import reducer, { initialState } from '../';
import {
  setInterfaceEditorTreeNavigatorCollapsedElementPaths,
  toggleInterfaceEditorTreeNavigatorElementCollapsed,
} from '../../../actions/interfaceEditorTreeNavigatorCollapsedElementPaths';

describe('interfaceEditorTreeNavigatorCollapsedElementPaths reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorStyleEditorInputCollapsedElementPaths action creator', () => {
    const collapsedElementPaths = {};

    expect(
      reducer(undefined, setInterfaceEditorTreeNavigatorCollapsedElementPaths(collapsedElementPaths))
    ).toEqual(collapsedElementPaths);
  });

  it('should handle action created by the toggleInterfaceEditorTreeNavigatorElementCollapsed action creator', () => {
    const elementPath = [0, 1];
    const expectedState = new Set([elementPath]);

    expect(
      reducer(undefined, toggleInterfaceEditorTreeNavigatorElementCollapsed(elementPath))
        .equals(expectedState)
    ).toBeTruthy();
  });
});
