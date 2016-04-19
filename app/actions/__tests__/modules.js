/* global it, describe, expect, jest */
jest.unmock('../modules');

import {
  SET_MODULES,
  SET_MODULE,
  DELETE_MODULE,
  setModules,
  setModule,
  deleteModule,
} from '../modules';

describe('modules actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting all modules', () => {
      expect(
        SET_MODULES
      ).toBeDefined();
    });

    it('should export an action type for setting a module', () => {
      expect(
        SET_MODULE
      ).toBeDefined();
    });

    it('should export an action type for deleting a module', () => {
      expect(
        DELETE_MODULE
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting all modules', () => {
      const modules = {};
      const expectedAction = {
        type: SET_MODULES,
        modules,
      };

      expect(
        setModules(modules)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for setting a module', () => {
      const moduleName = 'testModule';
      const module = {};
      const expectedAction = {
        type: SET_MODULE,
        moduleName,
        module,
      };

      expect(
        setModule(moduleName, module)
      ).toEqual(expectedAction);
    });

    it('should export an action creator for deleting a module', () => {
      const moduleName = 'testModule';
      const expectedAction = {
        type: DELETE_MODULE,
        moduleName,
      };

      expect(
        deleteModule(moduleName)
      ).toEqual(expectedAction);
    });
  });
});
