import { createSelector } from 'reselect';
import { presentState } from './undo';
import { last } from 'underscore';

export const inspectorTreePath = createSelector(
  presentState,
  (state) => state.inspectorTreePath,
);

export const inspectorTreePathResolvesProp = createSelector(
  inspectorTreePath,
  (inspectorTreePathState) => {
    const [inspectorTreePathLeafParent, inspectorTreePathLeaf] = last(inspectorTreePathState, 2);
    const inspectorTreePathLeafParentIsPropsKey = inspectorTreePathLeafParent === 'props';
    const inspectorTreePathLeafIsNonChildrenPropNameKey = inspectorTreePathLeafParentIsPropsKey
                                                        && !!inspectorTreePathLeaf
                                                        && inspectorTreePathLeaf !== 'children';

    return inspectorTreePathLeafIsNonChildrenPropNameKey;
  },
);
