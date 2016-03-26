import { connect } from 'react-redux';
import { interfaceEditorSelectedElementBreadcrumbElements } from '../../selectors/interfaceEditorComponent';
import { setInterfaceEditorSelectedElementPath } from '../../actions/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedElementBreadCrumbElements: interfaceEditorSelectedElementBreadcrumbElements(state),
});

const actionCreators = {
  onPressElement: setInterfaceEditorSelectedElementPath,
};

export default connect(mapStateToProps, actionCreators)(Component);
