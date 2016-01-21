import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  nameInputSection: {
    backgroundColor: '#f5f5f5',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    padding: 20,
  },
  nameInput: {
    color: '#666',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '600',
    height: 30,
  },

  valueInputSection: {
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    flex: 1,
    padding: 20,
  },
  valueInput: {
    color: '#2e3538',
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '600',
  },

  applyButtonSection: {
    padding: 10,
  },
  applyButton: {
    backgroundColor: '#2e3538',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  applyButtonLabel: {
    color: '#white',
    fontFamily: 'Avenir',
    fontSize: 28,
    fontWeight: '600',
  },
});
