import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},

  name: {},
  nameLabel: {
    color: '#ccc',
    fontFamily: 'Avenir',
    fontSize: 10,
  },

  field: {
    flexDirection: 'row',
  },

  value: {
    alignItems: 'center',
    backgroundColor: '#383c3d',
    borderColor: '#191d1f',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    height: 34,
    padding: 10,
    width: 76,
  },
  valueInput: {
    color: 'white',
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 12,
    height: 16,
  },
  unit: {},
  unitLabel: {
    color: 'hsla(0,0,100,0.3)',
    fontFamily: 'Avenir',
    fontSize: 12,
    textAlign: 'right',
  },

  buttons: {
    flexDirection: 'row',
  },
  incrementButton: {
    alignItems: 'center',
    backgroundColor: '#60686b',
    borderColor: '#191d1f',
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    borderLeftWidth: 0,
    borderWidth: 1,
    justifyContent: 'center',
    height: 34,
    width: 38,
  },
  incrementButtonImage: {
    height: 16,
    width: 16,
  },
  decrementButton: {
    alignItems: 'center',
    backgroundColor: '#60686b',
    borderColor: '#191d1f',
    borderLeftWidth: 0,
    borderWidth: 1,
    justifyContent: 'center',
    height: 34,
    width: 38,
  },
  decrementButtonImage: {
    height: 1,
    width: 16,
  },
});
