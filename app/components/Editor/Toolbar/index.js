import { connect } from 'react-redux/native';
import Toolbar from './component';
import { showTree, hideTree } from '../../../actions/showingTree';

const mapStateToProps = (state) => ({
  showingTree: state.showingTree,
});

const actionCreators = {
  showTree,
  hideTree,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
