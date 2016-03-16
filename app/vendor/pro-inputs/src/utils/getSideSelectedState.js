import {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
  ALL_SIDES,
  VERTICAL_SIDES,
  HORIZONTAL_SIDES,
} from '../constants/boxSides';

export default function getSideSelectedState(selectedSides, side) {
  if (selectedSides === ALL_SIDES) {
    return true;
  }

  if (selectedSides === VERTICAL_SIDES) {
    if (side === TOP || side === BOTTOM) {
      return true;
    }
  }

  if (selectedSides === HORIZONTAL_SIDES) {
    if (side === LEFT || side === RIGHT) {
      return true;
    }
  }

  return selectedSides === side;
}
