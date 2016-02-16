import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: '#383C3D',
    borderBottomWidth: 1,
    borderTopColor: '#383C3D',
    borderTopWidth: 1,
    flex: 1,
    marginVertical: 20,
    paddingVertical: 10,
  },

  controls: {
    flex: 1,
    width: 256,
    height: 228,
  },

  marginValueLabels: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  contentColumn: {
    flex: 1,
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
  },

  valueLabel: {
    backgroundColor: 'transparent',
    color: '#aaa',
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  marginTopValueLabel: {
    paddingBottom: 6,
  },
  marginRightValueLabel: {
    marginTop: 106,
    paddingLeft: 10,
    textAlign: 'left',
  },
  marginBottomValueLabel: {
    paddingTop: 6,
  },
  marginLeftValueLabel: {
    marginTop: 106,
    paddingRight: 10,
    textAlign: 'right',
  },
  paddingTopValueLabel: {
    position: 'absolute',
    top: 75,
    right: 70,
    left: 70,
  },
  paddingRightValueLabel: {
    position: 'absolute',
    top: 105,
    right: 78,
  },
  paddingBottomValueLabel: {
    position: 'absolute',
    right: 70,
    bottom: 75,
    left: 70,
  },
  paddingLeftValueLabel: {
    position: 'absolute',
    top: 105,
    left: 78,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  buttonImage: {
    resizeMode: 'contain',
  },

  marginTopButton: {
    top: 0,
    right: 0,
    left: 0,
    height: 34,
  },
  marginTopButtonImage: {
    maxWidth: 247,
    maxHeight: 34,
  },
  marginRightButton: {
    top: 0,
    right: 0,
    bottom: 0,
    width: 34,
  },
  marginRightButtonImage: {
    maxWidth: 34,
    maxHeight: 221,
  },
  marginBottomButton: {
    right: 0,
    bottom: 0,
    left: 0,
    height: 34,
  },
  marginBottomButtonImage: {
    maxWidth: 247,
    maxHeight: 34,
  },
  marginLeftButton: {
    top: 0,
    bottom: 0,
    left: 0,
    width: 34,
  },
  marginLeftButtonImage: {
    maxWidth: 34,
    maxHeight: 221,
  },

  paddingTopButton: {
    top: 38,
    right: 38,
    left: 38,
    height: 34,
  },
  paddingTopButtonImage: {
    maxWidth: 171,
    maxHeight: 34,
  },
  paddingRightButton: {
    top: 38,
    right: 38,
    bottom: 38,
    width: 34,
  },
  paddingRightButtonImage: {
    maxWidth: 34,
    maxHeight: 145,
  },
  paddingBottomButton: {
    right: 38,
    bottom: 38,
    left: 38,
    height: 34,
  },
  paddingBottomButtonImage: {
    maxWidth: 171,
    maxHeight: 34,
  },
  paddingLeftButton: {
    top: 38,
    bottom: 38,
    left: 38,
    width: 34,
  },
  paddingLeftButtonImage: {
    maxWidth: 34,
    maxHeight: 145,
  },
});
