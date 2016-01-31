import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4b4b4b',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  propsSection: {},
  prop: {
    backgroundColor: '#333',
    borderColor: '#191d1f',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  propLabel: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  propValueLabel: {
    color: '#aaa',
    fontWeight: 'normal',
  },

  propEditor: {
    backgroundColor: '#333',
    borderColor: '#191d1f',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
  },
  propNameSection: {
    alignItems: 'center',
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  propNameInput: {
    color: 'white',
    flex: 1,
    fontSize: 10,
    fontFamily: 'Avenir',
    height: 32,
  },
  deletePropButton: {
    padding: 6,
  },
  deletePropButtonImage: {
    width: 16,
    height: 16,
  },
  propTypeSection: {
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    borderTopColor: 'hsla(0,0,100,0.1)',
    borderTopWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  propTypeInput: {
    color: 'white',
    flex: 1,
    fontSize: 10,
    fontFamily: 'Avenir',
    height: 12,
  },
  propValueSection: {
    borderTopColor: 'hsla(0,0,100,0.1)',
    borderTopWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  propValueInput: {
    color: 'white',
    flex: 1,
    fontSize: 10,
    fontFamily: 'Avenir',
    height: 40,
  },

  addPropSection: {},
  addPropButton: {
    borderColor: '#191d1f',
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  addPropButtonLabel: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
});
