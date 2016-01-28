import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  toolbar: {
    backgroundColor: '#4b4b4b',
    borderRightColor: '#191d1f',
    borderRightWidth: 1,
    width: 49,
  },
  toolbarLogoButton: {
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
  },
  toolbarLogoButtonImage: {
    height: 48,
    width: 49,
  },
  toolbarButton: {
    alignItems: 'center',
    borderBottomColor: '#191d1f',
    borderBottomWidth: 1,
    borderTopColor: 'hsla(0,0,100,0.2)',
    borderTopWidth: 1,
    paddingVertical: 20,
  },
  toolbarButtonSelected: {
    backgroundColor: '#666',
  },
  toolbarButtonDisabled: {
    opacity: 0.4,
  },
  toolbarButtonImage: {
    width: 22,
    height: 22,
  },

  scene: {
    flex: 1,
  },
});
