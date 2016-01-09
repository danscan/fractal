import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2e3538',
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 10,
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonsRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {},
  showTreeButtonImage: {
    height: 24,
    width: 22,
  },
  closeEditorButtonImage: {
    height: 14,
    width: 14,
  },
});
