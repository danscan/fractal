import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  elementsSection: {
    flex: 1,
  },

  selectedElementActionsSection: {
    backgroundColor: '#4b4b4b',
    borderTopColor: '#191d1f',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 38,
  },
  selectedElementActionButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  hideButtonImage: {
    width: 26,
    height: 14,
  },
  deleteButtonImage: {
    width: 22,
    height: 22,
  },
});
