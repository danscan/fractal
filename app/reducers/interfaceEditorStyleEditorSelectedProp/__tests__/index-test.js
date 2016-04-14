/* global it, describe, expect, jest */
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorStyleEditorSelectedProp');

import reducer, { initialState } from '../';
import {
  setInterfaceEditorStyleEditorSelectedProp,
} from '../../../actions/interfaceEditorStyleEditorSelectedProp';

describe('interfaceEditorStyleEditorSelectedProp reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorStyleEditorSelectedProp action creator', () => {
    const selectedProp = {};

    expect(
      reducer(undefined, setInterfaceEditorStyleEditorSelectedProp(selectedProp))
    ).toEqual(selectedProp);
  });
});
