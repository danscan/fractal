import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedComponentKey } from '../../selectors/interfaceEditorSelectedComponentKey';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners } from '../../selectors/interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners';
import { interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides';
import { interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides';
import { interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides';
import { interfaceEditorInspectorStyleEditorSelectedProp } from '../../selectors/interfaceEditorInspectorStyleEditorSelectedProp';
import { applyInterfaceEditorComponentElementProp } from '../../actions/interfaceEditorComponent';
import { setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners } from '../../actions/interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners';
import { setInterfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides } from '../../actions/interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides';
import { setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides } from '../../actions/interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides';
import { setInterfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides } from '../../actions/interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides';
import Component from './component';

const mapStateToProps = (state) => {
  const selectedElement = interfaceEditorSelectedElement(state);
  const styleEditorSelectedProp = interfaceEditorInspectorStyleEditorSelectedProp(state);

  return {
    borderCornersInputSelectedCorners: interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners(state),
    borderSidesInputSelectedSides: interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides(state),
    marginInputSelectedSides: interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides(state),
    paddingInputSelectedSides: interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides(state),
    propName: styleEditorSelectedProp,
    propType: selectedElement.getIn(['type', 'propTypes', styleEditorSelectedProp]),
    selectedComponentKey: interfaceEditorSelectedComponentKey(state),
    selectedElementPath: interfaceEditorSelectedElementPath(state),
    value: selectedElement.getIn(['props', styleEditorSelectedProp]),
  };
};

const actionCreators = {
  onChangeBorderCornersInputSelectedCorners: setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners,
  onChangeBorderSidesInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides,
  onChangeMarginInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides,
  onChangePaddingInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides,
  onChangeValue: applyInterfaceEditorComponentElementProp,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    propName,
    selectedComponentKey,
    selectedElementPath,
  } = stateProps;
  // Create onChangeValue function prop...
  const onChangeValue = (value) => dispatchProps.onChangeValue(
    selectedComponentKey,
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
