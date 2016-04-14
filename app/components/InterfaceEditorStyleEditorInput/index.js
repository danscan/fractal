import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorStyleEditorInputBorderCornersInputSelectedCorners } from '../../selectors/interfaceEditorStyleEditorInputBorderCornersInputSelectedCorners';
import { interfaceEditorStyleEditorInputBorderSidesInputSelectedSides } from '../../selectors/interfaceEditorStyleEditorInputBorderSidesInputSelectedSides';
import { interfaceEditorStyleEditorInputMarginInputSelectedSides } from '../../selectors/interfaceEditorStyleEditorInputMarginInputSelectedSides';
import { interfaceEditorStyleEditorInputPaddingInputSelectedSides } from '../../selectors/interfaceEditorStyleEditorInputPaddingInputSelectedSides';
import { interfaceEditorStyleEditorSelectedProp } from '../../selectors/interfaceEditorStyleEditorSelectedProp';
import { applyInterfaceEditorComponentElementProp } from '../../actions/interfaceEditorComponent';
import { setInterfaceEditorStyleEditorInputBorderCornersInputSelectedCorners } from '../../actions/interfaceEditorStyleEditorInputBorderCornersInputSelectedCorners';
import { setInterfaceEditorStyleEditorInputBorderSidesInputSelectedSides } from '../../actions/interfaceEditorStyleEditorInputBorderSidesInputSelectedSides';
import { setInterfaceEditorStyleEditorInputMarginInputSelectedSides } from '../../actions/interfaceEditorStyleEditorInputMarginInputSelectedSides';
import { setInterfaceEditorStyleEditorInputPaddingInputSelectedSides } from '../../actions/interfaceEditorStyleEditorInputPaddingInputSelectedSides';
import elementStylePropValueByElementAndPropName from '../../utils/elementStylePropValueByElementAndPropName';
import Component from './component';

const mapStateToProps = (state) => {
  const selectedElement = interfaceEditorSelectedElement(state);
  const styleEditorSelectedProp = interfaceEditorStyleEditorSelectedProp(state);

  return {
    borderCornersInputSelectedCorners: interfaceEditorStyleEditorInputBorderCornersInputSelectedCorners(state),
    borderSidesInputSelectedSides: interfaceEditorStyleEditorInputBorderSidesInputSelectedSides(state),
    marginInputSelectedSides: interfaceEditorStyleEditorInputMarginInputSelectedSides(state),
    paddingInputSelectedSides: interfaceEditorStyleEditorInputPaddingInputSelectedSides(state),
    propName: styleEditorSelectedProp,
    propType: selectedElement.getIn(['type', 'propTypes', styleEditorSelectedProp]),
    selectedElementPath: interfaceEditorSelectedElementPath(state),
    value: elementStylePropValueByElementAndPropName(selectedElement, styleEditorSelectedProp),
  };
};

const actionCreators = {
  onChangeBorderCornersInputSelectedCorners: setInterfaceEditorStyleEditorInputBorderCornersInputSelectedCorners,
  onChangeBorderSidesInputSelectedSides: setInterfaceEditorStyleEditorInputBorderSidesInputSelectedSides,
  onChangeMarginInputSelectedSides: setInterfaceEditorStyleEditorInputMarginInputSelectedSides,
  onChangePaddingInputSelectedSides: setInterfaceEditorStyleEditorInputPaddingInputSelectedSides,
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
