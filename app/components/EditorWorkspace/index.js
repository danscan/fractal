import { connect } from 'react-redux/native';
import EditorWorkspace from './component';
import { beginFullScreenPreview, endFullScreenPreview } from '../../actions/fullScreenPreview';
import { fullScreenPreview } from '../../selectors/fullScreenPreview';
import { tree } from '../../selectors/tree';

const mapStateToProps = (state) => ({
  fullScreenPreview: fullScreenPreview(state),
  rootCursor: tree(state),
});

const actionCreators = {
  beginFullScreenPreview,
  endFullScreenPreview,
};

export default connect(mapStateToProps, actionCreators)(EditorWorkspace);
export { EditorWorkspace };
