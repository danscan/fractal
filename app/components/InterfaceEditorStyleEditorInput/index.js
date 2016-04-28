import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorStyleEditorSelectedProp } from '../../selectors/interfaceEditorStyleEditorSelectedProp';
import { applyInterfaceEditorComponentElementProp } from '../../actions/interfaceEditorComponent';
import elementPropValueByElementAndPropName from '../../utils/elementPropValueByElementAndPropName';
import Component from './component';

const mapStateToProps = (state) => {
  const selectedElement = interfaceEditorSelectedElement(state);
  const styleEditorSelectedProp = interfaceEditorStyleEditorSelectedProp(state);

  return {
    propName: styleEditorSelectedProp,
    propType: selectedElement.getIn(['type', 'propTypes', styleEditorSelectedProp]),
    selectedElementPath: interfaceEditorSelectedElementPath(state),
    value: elementPropValueByElementAndPropName(selectedElement, styleEditorSelectedProp),
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
