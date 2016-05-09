import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4b4b4b',
    flex: 1,
  },

  selectedStyleNameOptions: {
    backgroundColor: '#f5f5f5',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  selectedStyleNameOptionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedStyleNameOptionsColumn: {
    flex: 1,
  },

  stylesActionsSection: {
    backgroundColor: '#f5f5f5',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  stylesActionButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 38,
  },
  stylesActionButtonImage: {
    height: 22,
    tintColor: '#404040',
    width: 22,
  },
  stylesAddActionButtonImage: {
    height: 19,
    width: 19,
  },
});
