import { connect } from 'react-redux/native';
import Toolbar from './component';
import { hideEditor } from '../../actions/showEditor';
import { pushEditorModalRoute } from '../../actions/editorModalRouteStack';
import router from '../../router';

const mapStateToProps = (state) => ({
  tree: state.tree,
});

const actionCreators = {
  onPressHideEditor: hideEditor,
  onPressShowTree: (tree) => {
    const rootNode = tree.get();

    return pushEditorModalRoute(router.getElementRoute(rootNode, []));
  },
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
