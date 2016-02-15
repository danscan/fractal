import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomColor: '#383C3D',
    borderBottomWidth: 1,
    borderTopColor: '#383C3D',
    borderTopWidth: 1,
    marginVertical: 20,
    paddingVertical: 10,
  },

  contentColumn: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  contentRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
  },

  marginColumn: {},
  paddingColumn: {},

  value: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  valueLabel: {
    color: '#aaa',
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '600',
  },

  button: {
    alignItems: 'center',
  },

  marginTopButton: {},
  marginTopButtonImage: {
    width: 247,
    height: 34,
  },
  marginRightButton: {},
  marginRightButtonImage: {
    width: 34,
    height: 221,
  },
  marginBottomButton: {
    marginTop: -30,
  },
  marginBottomButtonImage: {
    width: 247,
    height: 34,
  },
  marginLeftButton: {},
  marginLeftButtonImage: {
    width: 34,
    height: 221,
  },

  paddingTopButton: {
    // marginTop: 26,
  },
  paddingTopButtonImage: {
    width: 171,
    height: 34,
  },
  paddingRightButton: {
    marginTop: -30,
    paddingRight: 4,
  },
  paddingRightButtonImage: {
    width: 34,
    height: 145,
  },
  paddingBottomButton: {
    marginTop: -30,
  },
  paddingBottomButtonImage: {
    width: 171,
    height: 34,
  },
  paddingLeftButton: {
    marginTop: -30,
    paddingLeft: 4,
  },
  paddingLeftButtonImage: {
    width: 34,
    height: 145,
  },
});
