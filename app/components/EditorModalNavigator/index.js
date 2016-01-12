import { connect } from 'react-redux/native';
import EditorModalNavigator from './component';
import { pushRoute, popRoute, resetEditorModalRouteStack } from '../../actions/editorModalRouteStack';

const mapStateToProps = (state) => ({
  peekBehindEditorModal: state.peekBehindEditorModal,
  routeStack: state.editorModalRouteStack,
});

const actionCreators = {
  pushRoute,
  popRoute,
  resetRouteStack: resetEditorModalRouteStack,
  onPressClose: resetEditorModalRouteStack,
};

export default connect(mapStateToProps, actionCreators)(EditorModalNavigator);
export { EditorModalNavigator };
