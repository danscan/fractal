import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 20,
  },

  nameSection: {},
  nameLabel: {
    color: '#ccc',
    fontFamily: 'Avenir',
    fontSize: 10,
  },

  buttonsGroupSection: {
    flexDirection: 'row',
  },

  optionButton: {
    alignItems: 'center',
    backgroundColor: '#60686b',
    borderColor: '#191d1f',
    borderWidth: 1,
    justifyContent: 'center',
    height: 34,
    minWidth: 38,
    paddingHorizontal: 10,
  },
  optionButtonSelected: {
    backgroundColor: '#383c3d',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 10,
  }
});
