import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,

    backgroundColor: '#333',
    flexDirection: 'row',
    height: 38,
  },

  column: {
    alignItems: 'center',
    borderRightColor: '#191d1f',
    borderRightWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  canvasZoomColumn: {
    paddingHorizontal: 10,
  },
  button: {
    padding: 8,
  },
  buttonImage: {
    tintColor: '#ccc',
  },
  beginFullScreenPreviewButtonImage: {
    width: 22,
    height: 12,
  },
  zoomOutButtonImage: {
    height: 22,
    width: 22,
  },
  zoomInButtonImage: {
    height: 22,
    width: 22,
  },
  canvasDeviceImage: {
    width: 16,
    height: 22,
  },
  canvasOrientationImage: {
    width: 22,
    height: 20,
  },
  buttonLabel: {
    color: '#ccc',
    fontFamily: 'Avenir',
    fontSize: 10,
  },
  buttonValueLabel: {
    color: 'white',
    marginLeft: 10,
  },
  zoomValueLabel: {
    marginRight: 10,
  },
});
