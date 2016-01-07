import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomColor: '#00b5ec',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 20,
    paddingTop: 40,
  },

  buttons: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
  },
  button: {},
  buttonLabel: {
    color: '#00b5ec',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
