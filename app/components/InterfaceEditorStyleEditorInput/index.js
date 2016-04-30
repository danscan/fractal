import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorStyleSheetEditorSelectedStyleName } from '../../selectors/interfaceEditorStyleSheetEditorSelectedStyleName';
import { applyInterfaceEditorComponentElementProp } from '../../actions/interfaceEditorComponent';
import elementPropValueByElementAndPropName from '../../utils/elementPropValueByElementAndPropName';
import Component from './component';

const mapStateToProps = (state) => {
  const selectedElement = interfaceEditorSelectedElement(state);
  const styleSheetEditorSelectedStyleName = interfaceEditorStyleSheetEditorSelectedStyleName(state);

  return {
    propName: styleSheetEditorSelectedStyleName,
    selectedElementPath: interfaceEditorSelectedElementPath(state),
    value: StyleSheet.flatten(elementPropValueByElementAndPropName(selectedElement, styleSheetEditorSelectedStyleName)),
  };
};

const actionCreators = {
  onChangeValue: applyInterfaceEditorComponentElementProp,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    propName,
    selectedElementPath,
  } = stateProps;
  // Create onChangeValue function prop...
  const onChangeValue = (value) => dispatchProps.onChangeValue(
    selectedElementPath,
    propName,
    value,
  );

  return {
    ...stateProps,
    ...dispatchProps,
    onChangeValue,
    ...ownProps,
  };
};

export default connect(mapStateToProps, actionCreators, mergeProps)(Component);
