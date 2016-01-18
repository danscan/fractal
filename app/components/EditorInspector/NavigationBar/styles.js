import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 10,
  },

  leftButtons: {
    flex: 1,
  },
  rightButtons: {
    flex: 1,
  },

  button: {},

  backButton: {
    flexDirection: 'row',
  },
  backButtonChevronImage: {
    width: 13,
    height: 21,
    marginRight: 10,
  },
  backButtonTitleLabel: {
    color: '#2e3538',
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: 'bold',
  },

  title: {
    flex: 2,
  },
  titleLabel: {
    color: '#2e3538',
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
