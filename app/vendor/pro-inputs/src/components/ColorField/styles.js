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

  fieldSection: {
    flexDirection: 'row',
  },

  colorChip: {
    borderColor: '#191d1f',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderRightWidth: 0,
    borderWidth: 1,
    height: 32,
    width: 32,
  },

  valueInput: {
    alignItems: 'center',
    backgroundColor: '#333',
    borderColor: '#191d1f',
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    borderWidth: 1,
    color: 'white',
    flexDirection: 'row',
    fontFamily: 'Avenir',
    fontSize: 11,
    height: 32,
    padding: 8,
    width: 110,
  },
});
