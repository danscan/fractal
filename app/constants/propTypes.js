import { Image, PropTypes } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { portraitOrientation, landscapeOrientation } from './canvasOrientations';

export const canvasDevicePropType = ImmutablePropTypes.contains({
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
});

export const canvasOrientationPropType = PropTypes.oneOf([
  portraitOrientation,
  landscapeOrientation,
]);

export const elementTypePropType = ImmutablePropTypes.contains({
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  imageSource: Image.propTypes,
});

export const elementTypeGroupsListPropType = ImmutablePropTypes.listOf(
  ImmutablePropTypes.contains({
    name: PropTypes.string.isRequired,
    elementTypes: ImmutablePropTypes.listOf(elementTypePropType),
  })
);

export const elementPathPropType = ImmutablePropTypes.listOf(
  PropTypes.number,
);

export const elementPropType = ImmutablePropTypes.contains({
  displayName: PropTypes.string,
  type: PropTypes.func.isRequired,
  props: ImmutablePropTypes.map,
});
