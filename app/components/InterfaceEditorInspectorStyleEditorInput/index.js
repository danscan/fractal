import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponents';
import { interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners } from '../../selectors/interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners';
import { interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides';
import { interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides';
import { interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides';
import { interfaceEditorInspectorStyleEditorSelectedProp } from '../../selectors/interfaceEditorInspectorStyleEditorSelectedProp';
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
    propType: selectedElement.getIn(['type', 'propTypes', styleEditorSelectedProp]),
    value: selectedElement.getIn(['props', styleEditorSelectedProp]),
  };
};

const actionCreators = {
  onChangeBorderCornersInputSelectedCorners: setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners,
  onChangeBorderSidesInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides,
  onChangeMarginInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides,
  onChangePaddingInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides,
};

export default connect(mapStateToProps, actionCreators)(Component);
