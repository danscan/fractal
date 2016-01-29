import { connect } from 'react-redux/native';
import { showAddElementModal } from '../../selectors/editor';
import Editor from './component';

const mapStateToProps = (state) => ({
  showAddElementModal: showAddElementModal(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Editor);
export { Editor };
