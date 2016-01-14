import { connect } from 'react-redux/native';
import { selectElementWithElementPath } from '../../selectors/tree';
import Root from './component';

// (Configuration constants)
const ROOT_ELEMENT_PATH = [];

const mapStateToProps = (state) => ({
  element: selectElementWithElementPath(ROOT_ELEMENT_PATH)(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Root);
export { Root };
