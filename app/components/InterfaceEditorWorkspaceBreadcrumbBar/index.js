import { connect } from 'react-redux';
import { interfaceEditorSelectedElementBreadcrumbElements } from '../../selectors/interfaceEditorComponents';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedElementBreadCrumbElements: interfaceEditorSelectedElementBreadcrumbElements(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
