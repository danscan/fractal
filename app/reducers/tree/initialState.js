import Baobab from 'baobab';
import { Text, View } from 'react-native';

export default new Baobab({
  displayName: 'Root',
  type: View,
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
    style: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  },
});
