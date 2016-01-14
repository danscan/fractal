import { connect } from 'react-redux/native';
import Toolbar from './component';
import { hideEditor } from '../../actions/showEditor';
import { pushEditorModalRoute } from '../../actions/editorModalRouteStack';
import router from '../../router';

const mapStateToProps = () => ({});

const actionCreators = {
  onPressHideEditor: hideEditor,
  onPressShowTree: () => pushEditorModalRoute(router.getElementRoute([])),
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
