import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  inputSection: {
    backgroundColor: '#f5f5f5',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    padding: 20,
  },
  input: {
    color: '#666',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '600',
    height: 30,
  },

  autoCompleteSection: {
    flex: 1,
  },
  autoCompleteList: {},
  autoCompleteResult: {
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    padding: 20,
  },
  autoCompleteResultLabel: {
    color: '#aaa',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '600',
  },
});
