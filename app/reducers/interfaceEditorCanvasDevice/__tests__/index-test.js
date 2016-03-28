/* global it, describe, expect, jest */
jest.unmock('../');
jest.unmock('../../../actions/interfaceEditorCanvasDevice');

import reducer, { initialState } from '../';
import {
  setInterfaceEditorCanvasDevice,
} from '../../../actions/interfaceEditorCanvasDevice';

describe('interfaceEditorCanvasDevice reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorCanvasDevice action creator', () => {
    const canvasDevice = {};

    expect(
      reducer(undefined, setInterfaceEditorCanvasDevice(canvasDevice))
    ).toEqual(canvasDevice);
  });
});
