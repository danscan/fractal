import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2e3538',
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 2,
  },

  leftButtons: {
    flex: 1,
    flexDirection: 'row',
  },

  rightButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  button: {
    padding: 8,
  },
  buttonDisabled: {
    opacity: 0.2,
  },
  beginPreviewButtonImage: {
    height: 22,
    width: 22,
  },
  redoButtonImage: {
    height: 22,
    width: 22,
  },
  undoButtonImage: {
    height: 22,
    width: 22,
  },
});
