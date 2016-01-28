import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#393939',
    flex: 1,
  },

  tabBar: {
    backgroundColor: '#393939',
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 49,
  },
  tabBarButton: {
    alignItems: 'center',
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    borderRightColor: '#191d1f',
    borderRightWidth: 1,
    justifyContent: 'center',
    height: 49,
    width: 49,
  },
  tabBarButtonSelected: {
    backgroundColor: '#4b4b4b',
    borderBottomWidth: 0,
  },
  navigatorTabBarButtonImage: {
    width: 22,
    height: 22,
  },
  styleEditorTabBarButtonImage: {
    width: 28,
    height: 28,
  },
  propsEditorTabBarButtonImage: {
    width: 23,
    height: 17,
  },
});
