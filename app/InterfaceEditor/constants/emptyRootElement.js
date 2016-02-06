import { View } from 'react-native';
import { Map, List } from 'immutable';
import elementByType from '../utils/elementByType';

export default elementByType(View, new Map({
  children: new List([]),
  style: new Map({
    backgroundColor: 'white',
    flex: 1,
  }),
}), 'Root');
