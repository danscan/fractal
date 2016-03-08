import React, { createElement, Text, View } from 'react-native';
import { List, Map } from 'immutable';
import styles from './styles';

// -- MODEL
const treeRootElementPath = new List;
const initialState = {
  tree: new Map({
    type: View,
    props: new Map({
      children: new List,
    }),
  }),
  selectedElementPath: treeRootElementPath,
};
export function init({ tree, selectedElementPath } = initialState) {
  return { tree, selectedElementPath };
}


// -- UPDATE
export function update(state) {
  return state;
}


// -- VIEW
export function view({ state }) {
  return renderTree({
    element: state.tree,
    elementPath: treeRootElementPath,
    selectedElementPath: state.selectedElementPath,
  });
}

function renderTree({ element, elementPath, selectedElementPath }) {
  if (typeof element === 'string') {
    return element;
  }

  const elementType = element.get('type');
  const propsWithoutChildren = element.get('props').delete('children').toJS();
  const children = element.getIn(['props', 'children']);
  const elementKeyProp = elementPath;
  const elementProps = {
    ...propsWithoutChildren,
    key: elementKeyProp,
    style: propsWithoutChildren.style,
  };
  const elementChildren = children.map((childElement, childKey) => {
    const childElementPath = elementPath.push(childKey);

    return renderTree({
      element: childElement,
      elementPath: childElementPath,
      selectedElementPath,
    });
  }).push(renderCallOutChild({ elementPath, elementType, selectedElementPath }));

  return createElement(elementType, elementProps, elementChildren);
}

function renderCallOutChild({ elementPath, elementType, selectedElementPath }) {
  // Ensure that callOut element type can be a child of its parent...
  // (Text cannot have View as a child, so View cannot be the element type
  // of the callOut child.)
  const ElementType = elementType === Text
                    ? Text
                    : elementType;

  if (selectedElementPath && !selectedElementPath.isEmpty() && selectedElementPath.equals(elementPath)) {
    return <ElementType key="callOut" style={styles.callOut}/>;
  }

  return null;
}
