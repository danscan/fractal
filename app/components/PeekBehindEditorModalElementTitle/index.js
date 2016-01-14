import { connect } from 'react-redux/native';
import PeekBehindEditorModalElementTitle from './component';
import { selectElementWithElementPath } from '../../selectors/tree';

const mapStateToProps = (state, ownProps) => ({
  element: selectElementWithElementPath(ownProps.elementPath)(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(PeekBehindEditorModalElementTitle);
export { PeekBehindEditorModalElementTitle };
