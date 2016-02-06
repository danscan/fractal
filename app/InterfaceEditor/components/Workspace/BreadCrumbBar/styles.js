import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#dad9d4',
    borderTopColor: '#666',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 35,
    overflow: 'hidden',
  },

  breadCrumbElement: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 20,
  },

  breadCrumbElementLabel: {
    color: '#808080',
    fontFamily: 'Avenir',
    fontSize: 12,
  },

  breadCrumbElementPoint: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,

    borderRightColor: '#666',
    borderRightWidth: 1,
    borderTopColor: '#666',
    borderTopWidth: 1,
    height: 35,
    width: 35,

    transform: [
      { rotateY: '45deg' },
      { rotateZ: '45deg' },
    ],
  },
});
