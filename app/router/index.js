/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
import React from 'react-native';
import ElementScene from '../scenes/Element';
import CreateElementChildScene from '../scenes/CreateElementChild';
import EditElementPropScene from '../scenes/EditElementProp';

export default {
  getElementRoute(props) {
    return {
      props,

      renderScene() {
        return (
          <ElementScene elementPath={props.elementPath}/>
        );
      },
    };
  },

  getCreateElementChildRoute(props) {
    return {
      props,

      renderScene() {
        return (
          <CreateElementChildScene elementPath={props.elementPath}/>
        );
      },
    };
  },

  getEditElementPropRoute(props) {
    return {
      props,

      renderScene() {
        return (
          <EditElementPropScene
            elementPath={props.elementPath}
            propName={props.propName}
          />
        );
      },
    };
  },
};
