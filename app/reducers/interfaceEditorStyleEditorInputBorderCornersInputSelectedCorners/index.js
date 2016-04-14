import { SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_BORDER_CORNERS_INPUT_SELECTED_CORNERS } from '../../actions/interfaceEditorStyleEditorInputBorderCornersInputSelectedCorners';
import { boxCorners } from '../../vendor/pro-inputs/src';

export const initialState = boxCorners.ALL_CORNERS;

export default function interfaceEditorStyleEditorInputBorderCornersInputSelectedCorners(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_BORDER_CORNERS_INPUT_SELECTED_CORNERS:
      return action.selectedCorners;
    default:
      return state;
  }
}
