import { connect } from 'react-redux/native';
import PeekBehindEditorModalTitle from './component';
import { beginPeekBehindEditorModal, endPeekBehindEditorModal } from '../../../../../actions/peekBehindEditorModal';

const mapStateToProps = () => ({});

const actionCreators = {
  onPressIn: beginPeekBehindEditorModal,
  onPressOut: endPeekBehindEditorModal,
};

export default connect(mapStateToProps, actionCreators)(PeekBehindEditorModalTitle);
export { PeekBehindEditorModalTitle };
