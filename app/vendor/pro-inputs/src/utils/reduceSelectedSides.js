import {
  ALL_SIDES,
  VERTICAL_SIDES,
  HORIZONTAL_SIDES,
} from '../constants/boxSides';
import { Set } from 'immutable';

// (Value constants)
const allSidesSet = new Set(ALL_SIDES);
const verticalSidesSet = new Set(VERTICAL_SIDES);
const horizontalSidesSet = new Set(HORIZONTAL_SIDES);

export default function reduceSelectedSides(selectedSides, pressedSide) {
  const selectedSidesSet = new Set(selectedSides);
  const willExcludePressedSide = selectedSidesSet.has(pressedSide);
  const newSelectedSidesSet = willExcludePressedSide
    ? selectedSidesSet.delete(pressedSide)
    : selectedSidesSet.add(pressedSide);
  const selectedSidesIsAllSides = selectedSidesSet.equals(allSidesSet);
  const pressedSideIsAllSides = allSidesSet.equals(new Set(pressedSide));

  if (selectedSidesIsAllSides && pressedSideIsAllSides) {
    return [];
  }

  if (pressedSideIsAllSides) {
    return ALL_SIDES;
  }

  if (newSelectedSidesSet.equals(verticalSidesSet)) {
    return VERTICAL_SIDES;
  }

  if (newSelectedSidesSet.equals(horizontalSidesSet)) {
    return HORIZONTAL_SIDES;
  }

  if (willExcludePressedSide) {
    return newSelectedSidesSet
      .toArray();
  }

  return [pressedSide];
}
