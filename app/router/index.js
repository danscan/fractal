import React from 'react-native';
import ElementNavigationBarTitle from '../components/ElementNavigationBarTitle';
import ElementScene from '../scenes/Element';
import AddElementChildScene from '../scenes/AddElementChild';
import ApplyElementPropScene from '../scenes/ApplyElementProp';

export default {
  getElementRoute(elementPath) {
    return {
      renderScene() {
        return (
          <ElementScene elementPath={elementPath}/>
        );
      },

      renderTitle() {
        return (
          <ElementNavigationBarTitle elementPath={elementPath}/>
        );
      },
    };
  },

  getAddElementChildRoute(elementPath) {
    return {
      renderScene() {
        return (
          <AddElementChildScene elementPath={elementPath}/>
        );
      },

      getTitle() {
        return 'Add Child';
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

      getTitle() {
        return 'Apply Prop';
      },
    };
  },
};
