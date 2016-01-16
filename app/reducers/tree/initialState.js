import Baobab from 'baobab';
import { Text, ScrollView } from 'react-native';

export default new Baobab({
  displayName: 'Root',
  type: ScrollView,
  props: {
    children: [
      {
        type: Text,
        props: {
          children: [
            'Your app root',
          ],
          style: {
            color: '#666',
            fontFamily: 'Avenir',
            fontSize: 20,
          },
        },
      },
    ],
    contentContainerStyle: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    style: {
      backgroundColor: 'white',
      flex: 1,
    },
  },
});
