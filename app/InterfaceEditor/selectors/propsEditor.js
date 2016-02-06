import { createSelector } from 'reselect';
import reducerMountPoint from './reducerMountPoint';

function propsEditor(state) {
  return reducerMountPoint(state).propsEditor;
}

function expandedSectionPropNames(state) {
  const propsEditorState = propsEditor(state);

  return propsEditorState.get('expandedSectionPropNames');
}

function propInputTypesByPropName(state) {
  const propsEditorState = propsEditor(state);

  return propsEditorState.get('propInputTypesByPropName');
}

export const sectionIsExpanded = (propName) => createSelector(
  expandedSectionPropNames,
  (expandedSectionPropNamesState) => expandedSectionPropNamesState.has(propName),
);

export const propInputType = (propName) => createSelector(
  propInputTypesByPropName,
  (propInputsState) => propInputsState.get(propName),
);
