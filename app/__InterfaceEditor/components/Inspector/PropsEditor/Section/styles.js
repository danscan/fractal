import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4b4b4b',
    flex: 1,
  },

  headerSection: {
    alignItems: 'center',
    backgroundColor: '#333',
    borderTopColor: 'hsla(0,0,100,0.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 48,
    paddingRight: 20,
  },
  headerButton: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  arrow: {},
  collapsedSectionArrowImage: {
    width: 4,
    height: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  expandedSectionArrowImage: {
    width: 8,
    height: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  propName: {},
  propNameLabel: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: '600',
  },

  deleteButton: {},
  deleteButtonImage: {
    height: 22,
    width: 22,
  },

  inputsSection: {
    padding: 20,
    paddingBottom: 30,
  },
  propValueInput: {
    backgroundColor: '#333',
    borderColor: '#191d1f',
    borderRadius: 4,
    borderWidth: 1,
    color: 'white',
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 12,
    height: 250,
    padding: 10,
  },
});
