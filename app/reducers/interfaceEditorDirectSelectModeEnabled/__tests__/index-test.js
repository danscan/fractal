/* global it, describe, expect, jest */
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorDirectSelectModeEnabled');

import reducer, { initialState } from '../';
import {
  setInterfaceEditorDirectSelectModeEnabled,
} from '../../../actions/interfaceEditorDirectSelectModeEnabled';

describe('interfaceEditorDirectSelectModeEnabled reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorDirectSelectModeEnabled action creator', () => {
    const directSelectModeEnabled = {};

    expect(
      reducer(undefined, setInterfaceEditorDirectSelectModeEnabled(directSelectModeEnabled))
    ).toEqual(directSelectModeEnabled);
  });
});
