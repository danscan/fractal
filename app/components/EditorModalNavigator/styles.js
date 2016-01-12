import { StyleSheet } from 'react-native';

// (Configuration constants)
const NAVIGATION_BAR_HEIGHT = 48;

export default StyleSheet.create({
  container: {
    backgroundColor: 'hsla(0,0,100,0.1)',
    flex: 1,
  },

  navigationBar: {
    alignItems: 'center',
    backgroundColor: '#2e3538',
    flexDirection: 'row',
    height: NAVIGATION_BAR_HEIGHT,
    paddingHorizontal: 10,
  },

  scene: {
    backgroundColor: 'transparent',
    paddingTop: NAVIGATION_BAR_HEIGHT,
  },
});
