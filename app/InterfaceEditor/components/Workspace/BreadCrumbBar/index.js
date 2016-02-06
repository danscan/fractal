import { connect } from 'react-redux';
import { setSelectedElementPath } from '../../../actions/editor';
import { selectedElementBreadCrumbElements } from '../../../selectors/editor';
import BreadCrumbBar from './component';

const mapStateToProps = (state) => ({
  selectedElementBreadCrumbElements: selectedElementBreadCrumbElements(state),
});

const actionCreators = {
  onPressElement: setSelectedElementPath,
};

export default connect(mapStateToProps, actionCreators)(BreadCrumbBar);
export { BreadCrumbBar };
