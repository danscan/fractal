/* global define, it, describe */
import expect from 'expect';
import reducer from './';
import initialState from './initialState';
import {
  showAddElementModal,
  hideAddElementModal,
  setSelectedElementPath,
  resetSelectedElementPath,
} from '../../actions/editor';
import reduceShowAddElementModal from './reduceShowAddElementModal';
import reduceHideAddElementModal from './reduceHideAddElementModal';
import reduceSetSelectedElementPath from './reduceSetSelectedElementPath';
import reduceResetSelectedElementPath from './reduceResetSelectedElementPath';

describe('interface editor: editor reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by showAddElementModal action creator', () => {
    expect(
      reducer(undefined, showAddElementModal())
    ).toEqual(reduceShowAddElementModal(initialState));
  });

  it('should handle action created by hideAddElementModal action creator', () => {
    expect(
      reducer(undefined, hideAddElementModal())
    ).toEqual(reduceHideAddElementModal(initialState));
  });

  it('should handle action created by setSelectedElementPath action creator', () => {
    const action = setSelectedElementPath({});

    expect(
      reducer(undefined, action)
    ).toEqual(reduceSetSelectedElementPath(initialState, action));
  });

  it('should handle action created by resetSelectedElementPath action creator', () => {
    expect(
      reducer(undefined, resetSelectedElementPath())
    ).toEqual(reduceResetSelectedElementPath(initialState));
  });
});
