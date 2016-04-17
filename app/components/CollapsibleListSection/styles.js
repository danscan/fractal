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
    borderTopColor: 'hsla(0,0%,100%,0.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 38,
  },
  arrow: {
    marginLeft: 10,
    width: 18,
  },
  collapsedSectionArrowImage: {
    width: 4,
    height: 8,
    marginLeft: 2,
  },
  expandedSectionArrowImage: {
    width: 8,
    height: 4,
  },
  title: {
    flex: 1,
  },
  titleLabel: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Avenir',
    fontWeight: '600',
  },

  menuItems: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  childrenSection: {
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
  },
});
