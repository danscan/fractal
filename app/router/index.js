import React from 'react-native';
import CloseEditorModalButton from '../components/CloseEditorModalButton';
import PeekBehindEditorModalTitle from '../components/PeekBehindEditorModalTitle';
import ElementScene from '../scenes/Element';

export default {
  getElementRoute(element) {
    return {
      renderScene() {
        return (
          <ElementScene element={element}/>
        );
      },

      renderTitle() {
        return (
          <PeekBehindEditorModalTitle title={element.displayName}/>
        );
      },

      renderRightButton() {
        return (
          <CloseEditorModalButton/>
        );
      }
    };
  },
};
