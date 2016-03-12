import { Map, List } from 'immutable';

const defaultProps = new Map({ children: new List([]), style: new Map({}) });

export default function elementByType(type, props = defaultProps, displayName) {
  return new Map({
    displayName,
    type,
    props,
  });
}
