import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4b4b4b',
    flex: 1,
  },

  headerSection: {
    alignItems: 'center',
    backgroundColor: '#333',
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    borderTopColor: 'hsla(0,0,100,0.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 38,
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
  title: {},
  titleLabel: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Avenir',
    fontWeight: '600',
  },

  childrenSection: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 10,
  },
});
