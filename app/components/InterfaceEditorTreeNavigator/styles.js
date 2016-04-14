import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#393939',
    flex: 1,
  },

  elementsSection: {
    flex: 1,
  },
  element: {
    backgroundColor: '#4b4b4b',
  },

  selectedElementActionsSection: {
    backgroundColor: '#4b4b4b',
    borderTopColor: '#191d1f',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 38,
    marginRight: -2, // hide right border of last button
  },
  selectedElementActionButton: {
    alignItems: 'center',
    borderTopColor: 'hsla(0,0%,100%,0.1)',
    borderTopWidth: 1,
    borderRightColor: '#191d1f',
    borderRightWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  selectedSelectedElementActionButton: {
    backgroundColor: '#666',
  },
  duplicateButtonImage: {
    width: 22,
    height: 22,
  },
  moveButtonImage: {
    width: 23,
    height: 23,
  },
  // hideButtonImage: {
  //   width: 26,
  //   height: 14,
  // },
  deleteButtonImage: {
    width: 22,
    height: 22,
  },
});
