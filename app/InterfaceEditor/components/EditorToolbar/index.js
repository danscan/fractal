import { connect } from 'react-redux/native';
import { beginFullScreenPreview } from '../../actions/workspace';
import { redoTreeAction, undoTreeAction } from '../../actions/tree';
import { canRedoTreeAction, canUndoTreeAction } from '../../selectors/tree';
import Toolbar from './component';

const mapStateToProps = (state) => ({
  canRedo: canRedoTreeAction(state),
  canUndo: canUndoTreeAction(state),
});

const actionCreators = {
  onPressbeginFullScreenPreview: beginFullScreenPreview,
  onPressRedo: redoTreeAction,
  onPressUndo: undoTreeAction,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
