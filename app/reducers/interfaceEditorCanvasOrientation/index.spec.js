/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorCanvasOrientation,
  toggleInterfaceEditorCanvasOrientation,
} from '../../actions/interfaceEditorCanvasOrientation';
import {
  portraitOrientation,
  landscapeOrientation,
} from '../../constants/canvasOrientations';

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

  it('should handle action created by the toggleInterfaceEditorCanvasOrientation action creator', () => {
    expect(
      reducer(landscapeOrientation, toggleInterfaceEditorCanvasOrientation())
    ).toBe(portraitOrientation);

    expect(
      reducer(portraitOrientation, toggleInterfaceEditorCanvasOrientation())
    ).toBe(landscapeOrientation);
  });
});
