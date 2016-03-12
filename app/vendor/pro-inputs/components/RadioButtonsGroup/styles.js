import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
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

  itemButton: {
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    borderRightColor: '#191d1f',
    borderRightWidth: 1,
    justifyContent: 'center',
    height: 30,
    paddingHorizontal: 4,
  },
  itemButtonSelected: {
    backgroundColor: '#333',
  },
  firstItemButton: {
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  lastItemButton: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 10,
  },
});
