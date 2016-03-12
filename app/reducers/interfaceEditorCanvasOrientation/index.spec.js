/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorCanvasOrientation,
} from '../../actions/interfaceEditorCanvasOrientation';

describe('interfaceEditorCanvasOrientation reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorCanvasOrientation action creator', () => {
    const canvasOrientation = {};

    expect(
      reducer(undefined, setInterfaceEditorCanvasOrientation(canvasOrientation))
    ).toEqual(canvasOrientation);
  });
});
