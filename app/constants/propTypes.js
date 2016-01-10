import { PropTypes } from 'react-native';

export const elementPropType = PropTypes.shape({
  displayName: PropTypes.string,
  type: PropTypes.func.isRequired,
  props: PropTypes.object,
});
