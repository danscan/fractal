import React from 'react-native';
import ElementScene from '../scenes/Element';
import CreateElementChildScene from '../scenes/CreateElementChild';
import EditElementPropScene from '../scenes/EditElementProp';

export default {
  getElementRoute(elementPath) {
    return {
      renderScene() {
        return (
          <ElementScene elementPath={elementPath}/>
        );
      },
    };
  },

  getAddElementChildRoute(elementPath) {
    return {
      renderScene() {
        return (
          <CreateElementChildScene elementPath={elementPath}/>
        );
      },
    };
  },

  getEditElementPropRoute(elementPath, propName) {
    return {
      renderScene() {
        return (
          <EditElementPropScene
            elementPath={elementPath}
            propName={propName}
          />
        );
      },
    };
  },
};
