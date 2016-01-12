import React from 'react-native';
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
    };
  },
};
