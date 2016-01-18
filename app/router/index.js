import React from 'react-native';
import ElementScene from '../scenes/Element';
import CreateElementChildScene from '../scenes/CreateElementChild';
import ApplyElementPropScene from '../scenes/ApplyElementProp';

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

  getApplyElementPropRoute(elementPath, propName) {
    return {
      renderScene() {
        return (
          <ApplyElementPropScene
            elementPath={elementPath}
            propName={propName}
          />
        );
      },
    };
  },
};
