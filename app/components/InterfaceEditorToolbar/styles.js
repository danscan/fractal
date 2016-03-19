import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4b4b4b',
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 49,
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

  buttonsGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  addElementButtonsGroup: {
    borderRightColor: '#191d1f',
    borderRightWidth: 1,
  },
  undoRedoButtonsGroup: {
    borderLeftColor: '#191d1f',
    borderLeftWidth: 1,
  },

  button: {
    borderRadius: 4,
    padding: 8,
  },
  buttonActive: {
    backgroundColor: '#666',
  },
  buttonImage: {
    height: 22,
    tintColor: '#ccc',
    width: 22,
  },
  buttonImageDisabled: {
    opacity: 0.2,
  },
});
