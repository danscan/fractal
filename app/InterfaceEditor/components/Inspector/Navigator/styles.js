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
    borderBottomColor: 'hsla(0,0,0,0.3)',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  elementHandleSection: {
    alignItems: 'center',
    borderTopColor: 'hsla(0,0,100,0.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  rootElementHandleSection: {
    borderTopWidth: 0,
  },
  selectedElementHandleSection: {
    backgroundColor: '#00b5ec',
    borderTopColor: 'hsla(0,0,100,0.2)',
  },
  elementToggleExpansionArrow: {
    backgroundColor: 'gray',
    marginRight: 10,
    height: 10,
    width: 10,
  },
  elementHandle: {
    paddingVertical: 10,
  },
  elementChildrenSection: {},
  elementNameLabel: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 12,
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
