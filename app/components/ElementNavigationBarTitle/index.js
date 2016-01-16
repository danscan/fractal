import { connect } from 'react-redux/native';
import ElementNavigationBarTitle from './component';
import { elementByElementPath } from '../../selectors/tree';

const mapStateToProps = (state, ownProps) => ({
  element: elementByElementPath(ownProps.elementPath)(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(ElementNavigationBarTitle);
export { ElementNavigationBarTitle };
