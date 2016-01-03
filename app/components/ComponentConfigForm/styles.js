import { StyleSheet } from 'react-native';

const baseSectionStyle = {
  borderBottomColor: '#eee',
  borderBottomWidth: 1,
};

export default StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 40,
  },

  formSection: {},

  propSection: {
    ...baseSectionStyle,
    flexDirection: 'row',
    padding: 20,
  },
  propName: {
    marginRight: 20,
  },
  propNameLabel: {
    color: '#666',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '600',
  },
  propType: {},
  propTypeLabel: {
    color: '#aaa',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '600',
  },

  selectedPropSection: {},
  editPropSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  inputLabelsSection: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
  inputLabel: {
    color: '#aaa',
    fontFamily: 'Avenir',
    fontSize: 13,
    fontWeight: '600',
    height: 34,
    marginBottom: 20,
    paddingTop: 8,
    textAlign: 'right',
  },
  inputsSection: {
    flex: 1,
  },
  input: {
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    color: '#aaa',
    flex: 1,
    height: 34,
    marginBottom: 20,
    paddingVertical: 8,
    fontFamily: 'Avenir',
    fontSize: 20,
    fontStyle: 'italic',
  },
  activeInput: {
    borderBottomColor: '#00b5ec',
    borderBottomWidth: 2,
    color: '#666',
  },

  noPropsSection: {
    ...baseSectionStyle,
    alignItems: 'center',
    paddingVertical: 20,
  },
  noPropsLabel: {
    color: '#666',
    fontFamily: 'Avenir',
    fontSize: 14,
  },

  addPropSection: baseSectionStyle,
  addPropButton: {
    backgroundColor: '#fafafa',
    padding: 20,
  },
  addPropButtonLabel: {
    color: '#aaa',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontStyle: 'italic',
  },
});
