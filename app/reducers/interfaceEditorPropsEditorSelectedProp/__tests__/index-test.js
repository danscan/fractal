/* global it, describe, expect, jest */
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorPropsEditorSelectedProp');

import reducer, { initialState } from '../';
import {
  setInterfaceEditorPropsEditorSelectedProp,
} from '../../../actions/interfaceEditorPropsEditorSelectedProp';

describe('interfaceEditorPropsEditorSelectedProp reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorPropsEditorSelectedProp action creator', () => {
    const selectedProp = {};

    expect(
      reducer(undefined, setInterfaceEditorPropsEditorSelectedProp(selectedProp))
    ).toEqual(selectedProp);
  });
});
