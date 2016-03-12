/* global it, describe */
import expect from 'expect';
import reducer, { initialState } from './';
import {
  setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners,
} from '../../actions/interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners';

describe('interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners action creator', () => {
    const selectedCorners = {};

    expect(
      reducer(undefined, setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners(selectedCorners))
    ).toEqual(selectedCorners);
  });
});
