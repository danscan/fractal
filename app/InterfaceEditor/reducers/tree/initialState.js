import { Map, List } from 'immutable';
import { Text, ScrollView } from 'react-native';

export default new Map({
  displayName: 'Root',
  type: ScrollView,
  props: new Map({
    children: new List([
      new Map({
        type: Text,
        props: new Map({
          children: new List([
            'Your app root',
          ]),
          style: new Map({
            color: '#666',
            fontFamily: 'Avenir',
            fontSize: 20,
          }),
        }),
      }),
    ]),
    contentContainerStyle: new Map({
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    }),
    style: new Map({
      backgroundColor: 'white',
      flex: 1,
    }),
  }),
});
