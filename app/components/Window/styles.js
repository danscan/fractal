import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4b4b4b',
    borderColor: '#191d1f',
    borderRadius: 4,
    borderWidth: 1,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
  },
  containerChangingPosition: {
    shadowOpacity: 0.4,
  },

  contents: {
    borderRadius: 4,
    flex: 1,
    overflow: 'hidden',
  },
});
