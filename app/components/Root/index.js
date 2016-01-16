import { connect } from 'react-redux/native';
import { selectedElementPath } from '../../selectors/selectedElementPath';
import { elementByElementPath } from '../../selectors/tree';
import Root from './component';

// (Configuration constants)
const ROOT_ELEMENT_PATH = [];

const mapStateToProps = (state) => ({
  element: elementByElementPath(ROOT_ELEMENT_PATH)(state),
  selectedElementPath: selectedElementPath(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Root);
export { Root };
