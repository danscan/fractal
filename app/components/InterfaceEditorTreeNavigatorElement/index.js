import { connect } from 'react-redux';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  isSelected: interfaceEditorSelectedElementPath(state).equals(ownProps.elementPath),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
