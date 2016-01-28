import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flexDirection: 'row',
    height: 38,
  },

  button: {
    alignItems: 'center',
    borderRightColor: '#191d1f',
    borderRightWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  buttonImage: {
    height: 22,
    tintColor: '#ccc',
    width: 22,
  },
  buttonLabel: {
    color: '#ccc',
    fontFamily: 'Avenir',
    fontSize: 10,
  },
  buttonValueLabel: {
    color: 'white',
    marginLeft: 10,
  },
});
