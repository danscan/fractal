import React from 'react-native';
import PeekBehindEditorModalTitle from '../components/PeekBehindEditorModalTitle';
import PeekBehindEditorModalElementTitle from '../components/PeekBehindEditorModalElementTitle';
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
          <PeekBehindEditorModalElementTitle elementPath={elementPath}/>
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

      renderTitle() {
        return (
          <PeekBehindEditorModalTitle title="Add Element"/>
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

      renderTitle() {
        return (
          <PeekBehindEditorModalTitle title="Apply Prop"/>
        );
      },
    };
  },
};
