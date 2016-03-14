import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  elementsSection: {
    flex: 1,
  },
  element: {
    backgroundColor: '#4b4b4b',
  },
  elementHandleSection: {
    alignItems: 'center',
    borderBottomColor: 'hsla(0,0%,0%,0.3)',
    borderBottomWidth: 1,
    borderTopColor: 'hsla(0,0%,100%,0.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  rootElementHandleSection: {
    borderTopWidth: 0,
  },
  selectedElementHandleSection: {
    backgroundColor: '#00b5ec',
    borderBottomColor: '#191d1f',
    borderTopColor: 'hsla(0,0%,100%,0.2)',
  },
  elementToggleExpansionArrow: {
    backgroundColor: 'gray',
    height: 32,
    width: 24,
  },
  elementTypeImage: {
    marginRight: 10,
    resizeMode: 'contain',
    tintColor: 'white',
    width: 12,
  },
  elementHandle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  elementChildrenSection: {},
  elementNameLabel: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 12,
  },
  changeElementDisplayNameButton: {
    padding: 4,
  },
  changeElementDisplayNameButtonImage: {
    width: 18,
    height: 18,
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
