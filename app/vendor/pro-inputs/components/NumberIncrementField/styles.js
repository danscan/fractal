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

  value: {
    alignItems: 'center',
    backgroundColor: '#333',
    borderColor: '#191d1f',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    height: 32,
    padding: 7,
    width: 70,
  },
  valueInput: {
    color: 'white',
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 12,
    height: 18,
  },
  unit: {},
  unitLabel: {
    color: 'hsla(0,0%,100%,0.3)',
    fontFamily: 'Avenir',
    fontSize: 12,
    textAlign: 'right',
  },

  buttons: {
    flexDirection: 'row',
  },
  incrementButton: {
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    borderColor: '#191d1f',
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    borderLeftWidth: 0,
    borderWidth: 1,
    justifyContent: 'center',
    height: 32,
    width: 34,
  },
  incrementButtonImage: {
    height: 16,
    width: 16,
  },
  decrementButton: {
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    borderColor: '#191d1f',
    borderLeftWidth: 0,
    borderWidth: 1,
    justifyContent: 'center',
    height: 32,
    width: 34,
  },
  decrementButtonImage: {
    height: 1,
    width: 16,
  },
});
