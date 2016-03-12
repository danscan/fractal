import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    backgroundColor: 'hsla(200,19,12,0.5)',
  },

  container: {
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    width: 637,
  },

  headerSection: {
    alignItems: 'center',
    backgroundColor: '#666',
    borderBottomColor: '#848484',
    borderColor: '#191d1f',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  headerLabel: {
    color: '#d8d8d8',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '600',
  },

  contentSection: {
    backgroundColor: '#4b4b4b',
    borderColor: '#191d1f',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopWidth: 0,
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  elementType: {
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    borderColor: '#191d1f',
    borderWidth: 1,
    height: 127,
    justifyContent: 'center',
    width: 127,
  },
  elementTypeLabel: {
    color: '#ccc',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
