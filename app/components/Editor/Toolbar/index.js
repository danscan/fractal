import { connect } from 'react-redux/native';
import Toolbar from './component';
import { showTree } from '../../../actions/showingTree';

const mapStateToProps = () => ({});

const actionCreators = {
  showTree,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
