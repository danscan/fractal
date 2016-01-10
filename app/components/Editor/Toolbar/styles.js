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
  showTreeButtonImage: {
    height: 24,
    width: 22,
  },
  closeEditorButtonImage: {
    height: 14,
    width: 14,
  },
});
