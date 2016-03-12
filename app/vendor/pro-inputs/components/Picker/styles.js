import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginBottom: 8,
  },

  nameSection: {
    paddingHorizontal: 10,
  },
  nameLabel: {
    color: '#ccc',
    fontFamily: 'Avenir',
    fontSize: 10,
  },

  bodySection: {
    backgroundColor: '#333',
    borderColor: '#191d1f',
    borderTopWidth: 1,
  },
  bodyButton: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#191d1f',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  bodyButtonPicking: {
    backgroundColor: '#414141',
  },

  selectedItemLabel: {
    backgroundColor: 'transparent',
    color: '#ddd',
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 12,
  },

  isPickingStatusImage: {
    width: 16,
    height: 7,
  },

  innerPicker: {
    backgroundColor: '#333',
    borderBottomWidth: 1,
    borderColor: '#191d1f',
  },
  innerPickerItemStyle: {
    color: '#ddd',
    fontSize: 12,
    fontFamily: 'Avenir',
    height: 130,
  },
});
