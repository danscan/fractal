import {
  ADD_ELEMENT,
  REMOVE_ELEMENT,
  CHANGE_CHILD_INDEX,
  ADD_ELEMENT_PROP,
  CHANGE_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
} from '../constants/actionsTypes';
import { isEmpty } from 'underscore';

import { Text, View } from 'react-native';
const initialState = {
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
};

export default function tree(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT:
      return reduceAddElement(state, action);
    case REMOVE_ELEMENT:
    case CHANGE_CHILD_INDEX:
    case ADD_ELEMENT_PROP:
    case CHANGE_ELEMENT_PROP:
    case REMOVE_ELEMENT_PROP:
    default:
      return state;
  }
}

function _getChildNodeByIndex(node, index) {
  const { props = {} } = node;
  const { children = [] } = props;

  return children[index];
}

function _addChildNode(node, childNode) {
  return {
    ...node,
    props: {
      ...node.props,
      children: [
        ...node.props.children,
        childNode,
      ],
    },
  };
}

function reduceAddElement(state, action) {
  const {
    element,
    parentElementPath = [],
  } = action;

  // If parentElementPath is empty, it's a path to the root
  if (isEmpty(parentElementPath)) {
    return _addChildNode(state, element);
  }

  const newPathBranchSequence = parentElementPath.reduce((aggregateSequentialTree, pathNode, index) => {
    if (index === parentElementPath.length - 1) {
      return [...aggregateSequentialTree, element];
    }

    return [
      ...aggregateSequentialTree,
      _getChildNodeByIndex(aggregateSequentialTree[index], pathNode),
    ];
  }, [state]);

  return newPathBranchSequence.reduceRight((newState, branchElement, index) => {
    if (index === 0) {

    }
  }, {});
}
