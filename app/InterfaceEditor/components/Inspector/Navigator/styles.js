import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  elementsSection: {
    flex: 1,
  },
  rootElement: {
    borderTopWidth: 0,
  },
  selectedElement: {
    backgroundColor: '#00b5ec',
  },
  element: {
    backgroundColor: '#4b4b4b',
    borderBottomColor: 'hsla(0,0,0,0.3)',
    borderBottomWidth: 1,
    borderTopColor: 'hsla(0,0,100,0.1)',
    borderTopWidth: 1,
    justifyContent: 'center',
    // paddingHorizontal: 14,
    paddingTop: 10,
  },
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
