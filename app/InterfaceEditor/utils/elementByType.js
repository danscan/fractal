import { Map, List } from 'immutable';

const defaultProps = new Map({ children: new List([]) });

export default function elementByType(type, props = defaultProps) {
  return new Map({
    type,
    props,
  });
}
