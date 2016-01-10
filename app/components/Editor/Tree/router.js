import React from 'react-native';
import PeekTitle from './PeekTitle';
import Element from './Element';

export default {
  getElementRoute(element) {
    return {
      renderScene(navigator) {
        return (
          <Element navigator={navigator} {...element}/>
        );
      },

      renderTitle() {
        return renderPeekTitle(element.type.displayName);
      },
    };
  },
};

export function renderPeekTitle(title) {
  return (
    <PeekTitle title={title}/>
  );
}
