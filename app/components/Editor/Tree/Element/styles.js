import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  propsSection: {
    backgroundColor: 'hsla(0,0,100,0.6)',
    borderColor: 'hsla(198,18,22,0.3)',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  propsSectionLabel: {
    color: 'hsla(198,18,22,0.5)',
    fontFamily: 'Avenir',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 10,
  },
  propsListSection: {},
  addPropButton: {
    alignItems: 'center',
    backgroundColor: 'hsla(198,18,22,0.1)',
    borderColor: 'hsla(198,18,22,0.3)',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
  },
  addPropButtonImage: {
    height: 16,
    tintColor: 'hsla(198,18,22,0.3)',
    width: 16,
  },

  childrenSection: {
    borderColor: '#94c600',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    marginBottom: 10,
    padding: 10,
  },
  childrenSectionLabel: {
    color: '#94c600',
    fontFamily: 'Avenir',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 10,
  },
  childrenListSection: {
    flex: 1,
  },
  addChildButton: {
    alignItems: 'center',
    backgroundColor: 'hsla(75,100,78,0.1)',
    borderColor: '#94c600',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
  },
  addChildButtonImage: {
    height: 16,
    tintColor: '#94c600',
    width: 16,
  },
});
