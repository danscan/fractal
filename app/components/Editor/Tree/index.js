import { connect } from 'react-redux/native';
import Tree from './component';

const mapStateToProps = (state) => ({
  showingTree: state.showingTree,
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Tree);
export { Tree };
