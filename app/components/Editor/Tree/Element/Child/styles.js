import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'hsla(75,100,78,0.2)',
    borderColor: '#94c600',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    marginBottom: 10,
    padding: 10,
  },

  handleSection: {
    marginBottom: 10,
  },
  displayNameLabel: {
    color: '#94c600',
    fontFamily: 'Avenir',
    fontSize: 13,
    fontWeight: '600',
    // textShadowColor: 'white',
    // textShadowOffset: { height: 1 },
  },

  childrenSection: {
    flex: 1,
  },
  stringChild: {
    backgroundColor: 'hsla(75,100,78,0.2)',
    borderColor: '#94c600',
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    flex: 1,
    padding: 10,
  },
  stringChildLabel: {
    color: '#94c600',
    fontFamily: 'Avenir',
    fontSize: 13,
    fontWeight: '600',
    // textShadowColor: 'white',
    // textShadowOffset: { height: 1 },
  },
});
