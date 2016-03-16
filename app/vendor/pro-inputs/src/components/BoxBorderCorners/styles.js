import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},

  row: {
    flexDirection: 'row',
    height: 34,
  },
  emptyColumn: {
    width: 32,
  },
  emptyMiddleRowColumn: {
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

  buttonAll: {},
  buttonTopRight: {
    borderTopRightRadius: 4,
  },
  buttonBottomRight: {
    borderBottomRightRadius: 4,
  },
  buttonBottomLeft: {
    borderBottomLeftRadius: 4,
  },
  buttonTopLeft: {
    borderTopLeftRadius: 4,
  },

  buttonImage: {
    width: 16,
    height: 16,
  },
});
