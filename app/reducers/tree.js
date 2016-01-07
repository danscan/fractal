import { Text, View } from 'react-native';

const initialState = {
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
};

export default function tree(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
