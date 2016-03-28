/* global it, describe, expect, jest */
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorFullscreenPreview');

import reducer, { initialState } from '../';
import {
  setInterfaceEditorFullscreenPreview,
} from '../../../actions/interfaceEditorFullscreenPreview';

describe('interfaceEditorFull reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorFullscreenPreview action creator', () => {
    const fullscreenPreview = {};

    expect(
      reducer(undefined, setInterfaceEditorFullscreenPreview(fullscreenPreview))
    ).toEqual(fullscreenPreview);
  });
});
