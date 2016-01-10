import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'hsla(0,0,100,0.1)',
    flex: 1,
    padding: 10,
  },

  navigationBar: {
    alignItems: 'center',
    backgroundColor: '#2e3538',
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 10,
  },
  navigationBarRightButton: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  scene: {
    paddingTop: 48,
  },
});
