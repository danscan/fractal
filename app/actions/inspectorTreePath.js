import {
  PUSH_INSPECTOR_TREE_PATH,
  POP_INSPECTOR_TREE_PATH,
  REPLACE_INSPECTOR_TREE_PATH,
} from '../constants/actionTypes';

export function pushInspectorTreePath(pathValue) {
  return {
    type: PUSH_INSPECTOR_TREE_PATH,
    pathValue,
  };
}

export function popInspectorTreePath() {
  return { type: POP_INSPECTOR_TREE_PATH };
}

export function replaceInspectorTreePath(treePath) {
  return {
    type: REPLACE_INSPECTOR_TREE_PATH,
    treePath,
  };
}
