import { connect } from 'react-redux/native';
import { selectedElementPath } from '../../../selectors/editor';
import StyleEditor from './component';

const mapStateToProps = (state) => ({
  selectedElementPath: selectedElementPath(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(StyleEditor);
export { StyleEditor };
