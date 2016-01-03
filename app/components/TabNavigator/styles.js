import { PixelRatio, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  scene: {
    flex: 1,
  },

  tabBar: {
    backgroundColor: '#f3f3f3',
    borderTopColor: '#a7a7a7',
    borderTopWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
    height: 49,
  },
});
