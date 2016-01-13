import React from 'react-native';
import PeekBehindEditorModalTitle from '../components/PeekBehindEditorModalTitle';
import ElementScene from '../scenes/Element';
import AddElementChildScene from '../scenes/AddElementChild';

export default {
  getElementRoute(element, elementPath) {
    return {
      renderScene() {
        return (
          <ElementScene element={element} elementPath={elementPath}/>
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

  getAddElementChildRoute(parentElementPath) {
    return {
      renderScene() {
        return (
          <AddElementChildScene parentElementPath={parentElementPath}/>
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
