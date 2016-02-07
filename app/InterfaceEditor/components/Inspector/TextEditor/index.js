import { connect } from 'react-redux';
import { selectedElementPath } from '../../../selectors/editor';
import TextEditor from './component';

const mapStateToProps = (state) => ({
  selectedElementPath: selectedElementPath(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(TextEditor);
export { TextEditor };
