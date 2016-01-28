import { connect } from 'react-redux/native';
import Workspace from './component';
import { beginFullScreenPreview, endFullScreenPreview } from '../../actions/workspace';
import { fullScreenPreview } from '../../selectors/workspace';
import { selectedElementPath } from '../../selectors/editor';
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

export default connect(mapStateToProps, actionCreators)(Workspace);
export { Workspace };
