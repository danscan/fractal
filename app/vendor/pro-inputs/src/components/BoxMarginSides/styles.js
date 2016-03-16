import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: 142,
  },

  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#616161',
    borderColor: '#2E3538',
    borderWidth: 1,
    justifyContent: 'center',
  },
  buttonSelected: {
    backgroundColor: '#333',
    borderColor: '#191d1f',
  },
  buttonImage: {},
  buttonHorizontalImage: {
    width: 13,
    height: 15,
  },
  buttonVerticalImage: {
    width: 13,
    height: 14,
  },
  buttonTop: {
    width: 79,
    height: 32,
    borderBottomColor: '#191d1f',
  },
  buttonRight: {
    width: 32,
    height: 78,
    borderLeftColor: '#191d1f',
  },
  buttonBottom: {
    width: 79,
    height: 32,
    borderTopColor: '#191d1f',
  },
  buttonLeft: {
    width: 32,
    height: 78,
    borderRightColor: '#191d1f',
  },

  allButton: {
    alignItems: 'center',
    backgroundColor: '#414141',
    justifyContent: 'center',
    width: 78,
    height: 78,
  },
  allButtonLabel: {
    color: '#ccc',
    fontFamily: 'Avenir',
    fontSize: 10,
  },
  allButtonSelected: {
    backgroundColor: '#333',
  },
});
