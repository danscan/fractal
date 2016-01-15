import { connect } from 'react-redux/native';
import EditorModalNavigator from './component';
import { pushEditorModalRoute, popEditorModalRoute, resetEditorModalRouteStack } from '../../actions/editorModalRouteStack';

const mapStateToProps = (state) => ({
  routeStack: state.editorModalRouteStack,
});

const actionCreators = {
  pushRoute: pushEditorModalRoute,
  popRoute: popEditorModalRoute,
  resetRouteStack: resetEditorModalRouteStack,
  onPressClose: resetEditorModalRouteStack,
};

export default connect(mapStateToProps, actionCreators)(EditorModalNavigator);
export { EditorModalNavigator };
