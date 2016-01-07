import { connect } from 'react-redux/native';
import Root from './component';

const mapStateToProps = (state) => ({
  tree: state.tree,
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Root);
export { Root };
