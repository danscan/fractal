import { connect } from 'react-redux/native';
import { ActionCreators } from 'redux-undo';
import { beginPreview } from '../../actions/preview';
import { selectCanRedo, selectCanUndo } from '../../selectors/undo';
import Toolbar from './component';

const mapStateToProps = (state) => ({
  canRedo: selectCanRedo(state),
  canUndo: selectCanUndo(state),
});

const actionCreators = {
  onPressBeginPreview: beginPreview,
  onPressRedo: ActionCreators.redo,
  onPressUndo: ActionCreators.undo,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
