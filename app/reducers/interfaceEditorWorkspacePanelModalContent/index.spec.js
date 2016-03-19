/* global it, describe */
import expect from 'expect';
import reducer from './';
import initialState from './initialState';
import {
  setInterfaceEditorWorkspacePanelModalContent,
} from '../../actions/interfaceEditorWorkspacePanelModalContent';

describe('interfaceEditorWorkspacePanelModalContent reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action created by the setInterfaceEditorWorkspacePanelModalContent action creator', () => {
    const modalContent = {};

    expect(
      reducer(undefined, setInterfaceEditorWorkspacePanelModalContent(modalContent))
    ).toEqual(modalContent);
  });
});
