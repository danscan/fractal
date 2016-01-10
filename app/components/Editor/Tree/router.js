import React from 'react-native';
import CloseTreeButton from './CloseTreeButton';
import PeekBehindTreeTitle from './PeekBehindTreeTitle';
import Element from './Element';

export default {
  getElementRoute(element) {
    return {
      renderScene(navigator) {
        return (
          <Element navigator={navigator} element={element}/>
        );
      },

      renderTitle() {
        return <PeekBehindTreeTitle title={element.displayName}/>;
      },

      renderRightButton() {
        return <CloseTreeButton/>;
      },
    };
  },
};
