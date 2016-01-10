import { connect } from 'react-redux/native';
import Navigator from './navigator';
import Tree from './component';

const mapStateToProps = (state) => ({
  showingTree: state.showingTree,
  tree: state.tree,
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Navigator);
export { Tree };
