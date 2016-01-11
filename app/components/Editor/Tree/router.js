import React from 'react-native';
import Element from './Element';

export default {
  getElementRoute(element) {
    return {
      renderScene(navigator) {
        return (
          <Element navigator={navigator} element={element}/>
        );
      },

      getTitle() {
        return element.displayName;
      },
    };
  },
};
