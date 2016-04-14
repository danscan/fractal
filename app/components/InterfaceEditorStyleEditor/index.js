import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorStyleEditorSelectedProp } from '../../selectors/interfaceEditorStyleEditorSelectedProp';
import { setInterfaceEditorStyleEditorSelectedProp } from '../../actions/interfaceEditorStyleEditorSelectedProp';
import Component from './component';

const mapStateToProps = (state) => ({
  propTypes: interfaceEditorSelectedElement(state).get('type').propTypes,
  selectedProp: interfaceEditorStyleEditorSelectedProp(state),
});

const actionCreators = {
  setSelectedProp: setInterfaceEditorStyleEditorSelectedProp,
};

export default connect(mapStateToProps, actionCreators)(Component);
