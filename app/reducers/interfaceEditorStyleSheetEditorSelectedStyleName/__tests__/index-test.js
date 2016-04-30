/* global it, describe, expect, jest */
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorStyleSheetEditorSelectedStyleName');

import reducer, { initialState } from '../';
import {
  setInterfaceEditorStyleSheetEditorSelectedStyleName,
} from '../../../actions/interfaceEditorStyleSheetEditorSelectedStyleName';

describe('interfaceEditorStyleSheetEditorSelectedStyleName reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorStyleSheetEditorSelectedStyleName action creator', () => {
    const styleName = {};

    expect(
      reducer(undefined, setInterfaceEditorStyleSheetEditorSelectedStyleName(styleName))
    ).toEqual(styleName);
  });
});
