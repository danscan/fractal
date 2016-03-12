/* global define, it, describe */
import expect from 'expect';
import {
  beginFullScreenPreview,
  endFullScreenPreview,
  setCanvasDevice,
  setCanvasOrientation,
  toggleCanvasOrientation,
  setCanvasZoom,
} from './workspace';
import {
  BEGIN_FULL_SCREEN_PREVIEW,
  END_FULL_SCREEN_PREVIEW,
  SET_CANVAS_DEVICE,
  SET_CANVAS_ORIENTATION,
  TOGGLE_CANVAS_ORIENTATION,
  SET_CANVAS_ZOOM,
} from '../constants/actionTypes';

describe('interface editor: workspace action creators', () => {
  it('should create an action to begin full screen preview', () => {
    const expectedAction = { type: BEGIN_FULL_SCREEN_PREVIEW };

    expect(
      beginFullScreenPreview()
    ).toEqual(expectedAction);
  });

  it('should create an action to end full screen preview', () => {
    const expectedAction = { type: END_FULL_SCREEN_PREVIEW };

    expect(
      endFullScreenPreview()
    ).toEqual(expectedAction);
  });

  it('should create an action to set canvas device', () => {
    const canvasDevice = 'iPad Pro';
    const expectedAction = {
      type: SET_CANVAS_DEVICE,
      canvasDevice,
    };

    expect(
      setCanvasDevice(canvasDevice)
    ).toEqual(expectedAction);
  });

  it('should create an action to set canvas orientation', () => {
    const canvasOrientation = 'portraitOrientation';
    const expectedAction = {
      type: SET_CANVAS_ORIENTATION,
      canvasOrientation,
    };

    expect(
      setCanvasOrientation(canvasOrientation)
    ).toEqual(expectedAction);
  });

  it('should create an action to toggle canvas orientation', () => {
    const expectedAction = { type: TOGGLE_CANVAS_ORIENTATION };

    expect(
      toggleCanvasOrientation()
    ).toEqual(expectedAction);
  });

  it('should create an action to set canvas zoom', () => {
    const canvasZoom = 1;
    const expectedAction = {
      type: SET_CANVAS_ZOOM,
      canvasZoom,
    };

    expect(
      setCanvasZoom(canvasZoom)
    ).toEqual(expectedAction);
  });
});
