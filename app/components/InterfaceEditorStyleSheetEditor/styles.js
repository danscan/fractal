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
  selectedStyleNameOptionLabel: {
    color: '#999',
    fontFamily: 'Avenir',
    fontSize: 10,
    marginBottom: 6,
  },
  selectedStyleNameOptionValueLabel: {
    color: '#404040',
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '600',
  },

  selectedStyleNameActionsSection: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  selectedStyleNameActionButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 38,
  },
  selectedStyleNameActionButtonImage: {
    height: 22,
    tintColor: '#404040',
    width: 22,
  },
});
