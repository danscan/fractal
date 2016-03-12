import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#dad9d4',
    borderTopColor: '#666',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 35,
    overflow: 'hidden',
    paddingLeft: 10,
  },

  breadCrumbElement: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 25,
  },

  breadCrumbElementImage: {
    marginRight: 10,
    resizeMode: 'contain',
    tintColor: '#808080',
    width: 12,
  },

  breadCrumbElementLabel: {
    color: '#808080',
    fontFamily: 'Avenir',
    fontSize: 10,
  },

  breadCrumbElementPoint: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,

    borderRightColor: '#666',
    borderRightWidth: 2,
    borderTopColor: '#666',
    borderTopWidth: 2,
    height: 35,
    width: 35,

    transform: [
      { rotateY: '65deg' },
      { rotateZ: '45deg' },
    ],
  },
});
