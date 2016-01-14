import {
  ADD_ELEMENT_CHILD,
  REMOVE_ELEMENT,
  CHANGE_ELEMENT_CHILD_INDEX,
  APPLY_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
} from '../constants/actionTypes';
import Baobab from 'baobab';

// (Configuration constants)
const ELEMENT_PROPS_KEY = 'props';
const ELEMENT_PROPS_CHILDREN_KEY = 'children';

import { Text, View } from 'react-native';
const initialState = new Baobab({
  displayName: 'Root',
  type: View,
  props: {
    children: [
      {
        type: Text,
        props: {
          children: [
            'Your app root',
          ],
          style: {
            color: '#666',
            fontFamily: 'Avenir',
            fontSize: 20,
          },
        },
      },
    ],
    style: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  },
});

export default function tree(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT_CHILD:
      return reduceAddElementChild(state, action);
    case REMOVE_ELEMENT:
      return reduceRemoveElement(state, action);
    case CHANGE_ELEMENT_CHILD_INDEX:
      return reduceChangeElementIndex(state, action);
    case APPLY_ELEMENT_PROP:
      return reduceApplyElementProp(state, action);
    case REMOVE_ELEMENT_PROP:
      return reduceRemoveElementProp(state, action);
    default:
      return state;
  }
}

function reduceAddElementChild(state, { elementPath, child }) {
  const elementChildrenPath = [
    ...elementPath,
    ELEMENT_PROPS_KEY,
    ELEMENT_PROPS_CHILDREN_KEY,
  ];

  state.push(elementChildrenPath, child);

  return state;
}

function reduceRemoveElement(state, { elementPath }) {
  state.unset(elementPath);

  return state;
}

function reduceChangeElementIndex(state, { elementPath, oldChildIndex, newChildIndex }) {
  const elementChildrenCursor = state.select([
    ...elementPath,
    ELEMENT_PROPS_KEY,
    ELEMENT_PROPS_CHILDREN_KEY,
  ]);
  const elementChild = state.select([
    ...elementChildrenCursor,
    oldChildIndex,
  ]).get();
  elementChildrenCursor.unset(oldChildIndex);
  elementChildrenCursor.splice(newChildIndex, 0, elementChild);

  return state;
}

function reduceApplyElementProp(state, { elementPath, propName, propValue }) {
  state.set([
    ...elementPath,
    ELEMENT_PROPS_KEY,
    propName,
  ], propValue);

  return state;
}

function reduceRemoveElementProp(state, { elementPath, propName }) {
  state.unset([
    ...elementPath,
    ELEMENT_PROPS_KEY,
    propName,
  ]);

  return state;
}
