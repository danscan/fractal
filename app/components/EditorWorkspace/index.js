import { connect } from 'react-redux/native';
import EditorWorkspace from './component';
import {
  beginFullScreenPreview,
  endFullScreenPreview,
} from '../../actions/fullScreenPreview';
import { fullScreenPreview } from '../../selectors/fullScreenPreview';

const mapStateToProps = (state) => ({
  fullScreenPreview: fullScreenPreview(state),
});

const actionCreators = {
  beginFullScreenPreview,
  endFullScreenPreview,
};

export default connect(mapStateToProps, actionCreators)(EditorWorkspace);
export { EditorWorkspace };
