import { connect } from 'react-redux/native';
import EditorWorkspace from './component';
import { beginFullScreenPreview, endFullScreenPreview } from '../../actions/fullScreenPreview';
import { fullScreenPreview } from '../../selectors/fullScreenPreview';
import { selectedElementPath } from '../../selectors/inspector';
import { treeRootElement } from '../../selectors/tree';

const mapStateToProps = (state) => ({
  fullScreenPreview: fullScreenPreview(state),
  selectedElementPath: selectedElementPath(state),
  treeRootElement: treeRootElement(state),
});

const actionCreators = {
  beginFullScreenPreview,
  endFullScreenPreview,
};

export default connect(mapStateToProps, actionCreators)(EditorWorkspace);
export { EditorWorkspace };
