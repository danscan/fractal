import { connect } from 'react-redux/native';
import ElementNavigationBarTitle from './component';
import { selectElementWithElementPath } from '../../selectors/tree';

const mapStateToProps = (state, ownProps) => ({
  element: selectElementWithElementPath(ownProps.elementPath)(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(ElementNavigationBarTitle);
export { ElementNavigationBarTitle };
