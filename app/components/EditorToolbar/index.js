import { connect } from 'react-redux/native';
import { ActionCreators } from 'redux-undo';
import { beginPreview } from '../../actions/preview';
import { canRedo, canUndo } from '../../selectors/undo';
import Toolbar from './component';

const mapStateToProps = (state) => ({
  canRedo: canRedo(state),
  canUndo: canUndo(state),
});

const actionCreators = {
  onPressBeginPreview: beginPreview,
  onPressRedo: ActionCreators.redo,
  onPressUndo: ActionCreators.undo,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
