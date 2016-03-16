import {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
  ALL_SIDES,
  VERTICAL_SIDES,
  HORIZONTAL_SIDES,
} from '../constants/boxSides';

export default function reduceSelectedSides(selectedSides, pressedSide) {
  const allSidesAreSelected = selectedSides === ALL_SIDES;
  const verticalSidesAreSelected = selectedSides === VERTICAL_SIDES;
  const horizontalSidesAreSelected = selectedSides === HORIZONTAL_SIDES;

  const pressedSideIsVerticalSide = pressedSide === TOP || pressedSide === BOTTOM;
  const pressedSideIsHorizontalSide = pressedSide === LEFT || pressedSide === RIGHT;

  const selectedSideIsVerticalSide = selectedSides === TOP || selectedSides === BOTTOM;
  const selectedSideIsHorizontalSide = selectedSides === LEFT || selectedSides === RIGHT;

  const pressedSideIsNotSelected = selectedSides !== pressedSide;

  if (allSidesAreSelected || verticalSidesAreSelected || horizontalSidesAreSelected) {
    return pressedSide;
  }

  if (selectedSideIsVerticalSide && pressedSideIsVerticalSide && pressedSideIsNotSelected) {
    return VERTICAL_SIDES;
  }

  if (selectedSideIsHorizontalSide && pressedSideIsHorizontalSide && pressedSideIsNotSelected) {
    return HORIZONTAL_SIDES;
  }

  return pressedSide;
}
