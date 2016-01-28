import { connect } from 'react-redux/native';
import { beginFullScreenPreview } from '../../../actions/workspace';
import Toolbar from './component';

const mapStateToProps = () => ({});

const actionCreators = {
  onPressBeginFullScreenPreview: beginFullScreenPreview,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
