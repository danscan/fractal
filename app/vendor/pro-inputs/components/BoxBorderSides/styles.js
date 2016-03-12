import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},

  row: {
    flexDirection: 'row',
    height: 34,
  },
  emptyColumn: {
    width: 33,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#626262',
    borderColor: '#191d1f',
    borderWidth: 1,
    justifyContent: 'center',
    width: 34,
  },
  buttonSelected: {
    backgroundColor: '#333',
  },

  buttonAll: {
    borderWidth: 0,
    width: 32,
  },
  buttonTop: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  buttonRight: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  buttonBottom: {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  buttonLeft: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },

  buttonImage: {
    width: 16,
    height: 16,
  },
});
