import { Navigator, StyleSheet } from 'react-native';

// (Configuration constants)
const LABEL_FONT_FAMILY = 'Avenir';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },

  scene: {
    paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight,
  },

  navigationBar: {
    alignItems: 'center',
    backgroundColor: '#2e3538',
    justifyContent: 'center',
    padding: 15,
  },
  navigationBarTitle: {
    marginTop: 6,
  },
  navigationBarTitleLabel: {
    color: 'white',
    fontFamily: LABEL_FONT_FAMILY,
    fontSize: 18,
  },
  navigationBarButton: {
    padding: 8,
  },
  navigationBarBackButton: {},
  navigationBarBackButtonLabel: {
    color: 'white',
    fontFamily: LABEL_FONT_FAMILY,
    fontSize: 14,
    fontWeight: '600',
  },
});
