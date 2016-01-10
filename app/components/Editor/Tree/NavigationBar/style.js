import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2e3538',
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 10,
  },

  leftButtons: {
    flex: 1,
    flexDirection: 'row',
  },

  peekTitle: {},

  rightButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  button: {},
  closeTreeButtonImage: {
    height: 14,
    width: 14,
  },
});
