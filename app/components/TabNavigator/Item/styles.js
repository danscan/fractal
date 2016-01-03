import { StyleSheet } from 'react-native';

export default ({ tintColor, textColor }) => StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  icon: {
    height: 20,
    marginTop: 4,
    tintColor,
  },

  label: {
    color: textColor,
    fontFamily: 'Avenir',
    fontSize: 10,
    fontWeight: 'bold',
    paddingTop: 4,
    textAlign: 'center',
  },
});
