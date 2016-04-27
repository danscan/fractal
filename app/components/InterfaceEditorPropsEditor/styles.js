import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4b4b4b',
    flex: 1,
  },

  propsList: {
    flex: 1,
  },
  selectedPropHeaderSection: {
    backgroundColor: '#00b5ec',
  },
  selectedPropTitleLabel: {
    color: 'white',
  },

  selectedPropOptions: {
    backgroundColor: '#f5f5f5',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  selectedPropOptionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedPropOptionsColumn: {
    flex: 1,
  },
  selectedPropOptionLabel: {
    color: '#999',
    fontFamily: 'Avenir',
    fontSize: 10,
    marginBottom: 6,
  },
  selectedPropOptionValueLabel: {
    color: '#404040',
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '600',
  },

  selectedPropActionsSection: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  selectedPropActionButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 38,
  },
  selectedPropActionButtonImage: {
    height: 22,
    tintColor: '#404040',
    width: 22,
  },
});
