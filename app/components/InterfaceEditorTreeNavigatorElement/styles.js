import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},

  headerSection: {
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    borderBottomColor: 'hsla(0,0%,0%,0.3)',
    borderLeftColor: 'hsla(0,0%,100%,0.1)',
    borderRightWidth: 0,
    borderTopColor: 'hsla(0,0%,100%,0.1)',
    borderWidth: 1,
    flexDirection: 'row',
  },
  headerSectionSelected: {
    backgroundColor: '#00b5ec',
    borderBottomColor: '#191d1f',
    borderTopColor: 'hsla(0,0%,100%,0.2)',
  },
  toggleCollapsedButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleCollapsedButtonImage: {
    width: 8,
    height: 4,
  },
  toggleCollapsedButtonImageCollapsed: {
    width: 4,
    height: 8,
  },
  handle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  elementTypeImage: {
    marginRight: 10,
    resizeMode: 'contain',
    tintColor: 'white',
    width: 12,
  },
  titleLabel: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 12,
  },
  editButton: {
    padding: 8,
  },
  editButtonImage: {
    width: 18,
    height: 18,
  },

  contentSection: {
    paddingLeft: 18,
  },
  contentSectionCollapsed: {},
});
