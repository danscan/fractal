import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  headerSection: {
    backgroundColor: '#666',
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    borderTopColor: 'hsla(0,0%,100%,0.1)',
    borderTopWidth: 1,
    padding: 10,
  },
  headerLabel: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '600',
  },

  contentSection: {},
  elementTypeButton: {
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    borderTopColor: 'hsla(0,0%,100%,0.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
    padding: 10,
  },
  elementTypeButtonImage: {
    marginRight: 10,
    resizeMode: 'contain',
    tintColor: 'white',
    width: 12,
  },
  elementTypeButtonLabel: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '600',
  },
});
