import React from 'react-native';
import PeekBehindEditorModalTitle from '../components/PeekBehindEditorModalTitle';
import ElementScene from '../scenes/Element';
import AddElementScene from '../scenes/AddElement';

export default {
  getElementRoute(element, elementIndex) {
    return {
      renderScene() {
        return (
          <ElementScene element={element} elementIndex={elementIndex}/>
        );
      },

      renderTitle() {
        const title = typeof element === 'string'
                    ? element
                    : element.displayName || element.type.displayName;

        return (
          <PeekBehindEditorModalTitle title={title}/>
        );
      },
    };
  },

  getAddElementRoute(parentElementIndex) {
    return {
      renderScene() {
        return (
          <AddElementScene parentElementIndex={parentElementIndex}/>
        );
      },

      renderTitle() {
        return (
          <PeekBehindEditorModalTitle title="Add Element"/>
        );
      }
    };
  },
};
