import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#DEE0E0',
    flex: 1,
    overflow: 'hidden',
  },

  endFullScreenPreviewButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 40,
    height: 40,

    alignItems: 'center',
    backgroundColor: 'hsla(198,18%,22%,0.6)',
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

  contentSection: {
    flex: 1,
    flexDirection: 'row',
  },

  previewSection: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  previewElementWrapper: {
    shadowColor: 'black',
    shadowOffset: { height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },

  inspectorSection: {
    flex: 1,
  },
});
