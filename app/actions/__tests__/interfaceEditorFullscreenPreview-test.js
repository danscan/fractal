/* global it, describe, expect, jest */
jest.unmock('../interfaceEditorFullscreenPreview');

import {
  SET_INTERFACE_EDITOR_FULLSCREEN_PREVIEW,
  setInterfaceEditorFullscreenPreview,
} from '../interfaceEditorFullscreenPreview';

describe('interfaceEditorDirectSelectModeEnabled actions file', () => {
  describe('action type(s)', () => {
    it('should export an action type for setting interface editor fullscreen preview', () => {
      expect(
        SET_INTERFACE_EDITOR_FULLSCREEN_PREVIEW
      ).toBeDefined();
    });
  });

  describe('action creator(s)', () => {
    it('should export an action creator for setting interface editor fullscreen preview', () => {
      const fullscreenPreview = {};
      const expectedAction = {
        type: SET_INTERFACE_EDITOR_FULLSCREEN_PREVIEW,
        fullscreenPreview,
      };

      expect(
        setInterfaceEditorFullscreenPreview(fullscreenPreview)
      ).toEqual(expectedAction);
    });
  });
});
