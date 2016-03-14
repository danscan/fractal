import { connect } from 'react-redux';
import { interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners } from '../../selectors/interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners';
import { interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides';
import { interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides';
import { interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides } from '../../selectors/interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides';
import { setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners } from '../../actions/interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners';
import { setInterfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides } from '../../actions/interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides';
import { setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides } from '../../actions/interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides';
import { setInterfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides } from '../../actions/interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides';
import Component from './component';

const mapStateToProps = (state) => ({
  borderCornersInputSelectedCorners: interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners(state),
  borderSidesInputSelectedSides: interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides(state),
  marginInputSelectedSides: interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides(state),
  paddingInputSelectedSides: interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides(state),
});

const actionCreators = {
  onChangeBorderCornersInputSelectedCorners: setInterfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners,
  onChangeBorderSidesInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides,
  onChangeMarginInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputMarginInputSelectedSides,
  onChangePaddingInputSelectedSides: setInterfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides,
};

export default connect(mapStateToProps, actionCreators)(Component);
