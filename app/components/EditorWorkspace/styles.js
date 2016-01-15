import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },

  endPreviewButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 40,
    height: 40,

    alignItems: 'center',
    backgroundColor: 'hsla(198,18,22,0.6)',
    borderRadius: 20,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  endPreviewButtonImage: {
    width: 18,
    height: 18,
  },
});
