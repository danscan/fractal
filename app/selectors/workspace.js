import { createSelector } from 'reselect';
import reducerMountPoint from './reducerMountPoint';

function workspace(state) {
  return reducerMountPoint(state).workspace;
}

export const fullScreenPreview = createSelector(
  workspace,
  (workspaceState) => workspaceState.get('fullScreenPreview'),
);

export const canvasDevice = createSelector(
  workspace,
  (workspaceState) => workspaceState.get('canvasDevice'),
);

export const canvasOrientation = createSelector(
  workspace,
  (workspaceState) => workspaceState.get('canvasOrientation'),
);

export const canvasZoom = createSelector(
  workspace,
  (workspaceState) => workspaceState.get('canvasZoom'),
);
