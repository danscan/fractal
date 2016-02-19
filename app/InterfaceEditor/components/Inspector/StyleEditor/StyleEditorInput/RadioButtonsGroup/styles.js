import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 10,
  },

  nameSection: {},
  nameLabel: {
    color: '#ccc',
    fontFamily: 'Avenir',
    fontSize: 10,
  },

  buttonsGroupSection: {
    borderColor: '#191d1f',
    borderRadius: 4,
    borderWidth: 1,
    borderRightWidth: 0,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  optionButton: {
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    borderRadius: 4,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRightColor: '#191d1f',
    borderRightWidth: 1,
    justifyContent: 'center',
    height: 28,
    minWidth: 34,
    paddingHorizontal: 4,
  },
  optionButtonSelected: {
    backgroundColor: '#333',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 10,
  },
});
