import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 10,
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
    borderRadius: 4,
    borderWidth: 1,
  },
  bodyButton: {
    alignItems: 'center',
    borderColor: '#191d1f',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  bodyButtonPicking: {
    backgroundColor: '#414141',
    borderBottomWidth: 1,
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
  },
  innerPickerItemStyle: {
    color: '#ddd',
    fontSize: 12,
    fontFamily: 'Avenir',
    height: 130,
  },
});
