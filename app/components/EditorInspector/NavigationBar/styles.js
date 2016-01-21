import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 10,
    shadowColor: 'black',
    shadowOffset: { height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 0,
  },

  leftButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  rightButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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

  hideButton: {},
  hideButtonImage: {
    width: 23,
    height: 12,
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
