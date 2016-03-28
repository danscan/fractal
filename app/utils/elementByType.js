import { Map } from 'immutable';

const defaultProps = new Map({});

export default function elementByType(type, props = defaultProps, displayName) {
  return new Map({
    displayName,
    type,
    props,
  });
}
