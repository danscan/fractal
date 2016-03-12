import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponents';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedElement: interfaceEditorSelectedElement(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
