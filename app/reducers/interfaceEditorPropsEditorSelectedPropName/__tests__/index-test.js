/* global it, describe, expect, jest */
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorPropsEditorSelectedPropName');

import reducer, { initialState } from '../';
import {
  setInterfaceEditorPropsEditorSelectedPropName,
} from '../../../actions/interfaceEditorPropsEditorSelectedPropName';

describe('interfaceEditorPropsEditorSelectedPropName reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorPropsEditorSelectedPropName action creator', () => {
    const propName = {};

    expect(
      reducer(undefined, setInterfaceEditorPropsEditorSelectedPropName(propName))
    ).toEqual(propName);
  });
});
