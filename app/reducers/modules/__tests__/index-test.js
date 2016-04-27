/* global it, describe, expect, jest */
jest.unmock('immutable');
jest.unmock('../');
jest.unmock('../initialState');
jest.unmock('../../../actions/modules');

import reducer from '../';
import initialState from '../initialState';
import {
  setModules,
  setModule,
  deleteModule,
} from '../../../actions/modules';

describe('modules reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setModules action creator', () => {
    const modules = {};

    expect(
      reducer(undefined, setModules(modules))
    ).toEqual(modules);
  });

  it('should handle action created by the setModule action creator', () => {
    const moduleName = 'testModule';
    const module = {};
    const expectedState = initialState
      .set(moduleName, module);

    expect(
      reducer(undefined, setModule(moduleName, module))
    ).toEqual(expectedState);
  });

  it('should handle action created by the deleteModule action creator', () => {
    const moduleName = 'testModule';
    const module = {};
    const previousState = initialState
      .set(moduleName, module);
    const expectedState = previousState
      .delete(moduleName);

    expect(
      reducer(previousState, deleteModule(moduleName))
    ).toEqual(expectedState);
  });
});
