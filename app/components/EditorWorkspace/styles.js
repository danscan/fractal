import { Dimensions, StyleSheet } from 'react-native';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },

  endFullScreenPreviewButton: {
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
  endFullScreenPreviewButtonImage: {
    width: 18,
    height: 18,
  },

  previewSection: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  previewElementWrapper: {
    width: windowDimensions.width,
    height: windowDimensions.height,

    borderColor: '#2e3538',
    borderRadius: 12,
    borderWidth: 3,
    padding: -3,
    transform: [
      { scale: 0.3 },
    ],
    overflow: 'hidden',
  },

  inspectorSection: {
    flex: 1,
  },
});
