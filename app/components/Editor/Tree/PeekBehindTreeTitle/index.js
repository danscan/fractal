import { connect } from 'react-redux/native';
import PeekBehindTreeTitle from './component';
import { beginPeekBehindTree, endPeekBehindTree } from '../../../../actions/peekBehindTree';

const mapStateToProps = () => ({});

const actionCreators = {
  onPressIn: beginPeekBehindTree,
  onPressOut: endPeekBehindTree,
};

export default connect(mapStateToProps, actionCreators)(PeekBehindTreeTitle);
export { PeekBehindTreeTitle };
