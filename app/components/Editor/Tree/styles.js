import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    backgroundColor: 'transparent',
  },
  maximum: {
    flex: 1,
  },

  container: {
    backgroundColor: 'hsla(0,0,100,0.5)',
    flex: 7,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { height: -1 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
});
