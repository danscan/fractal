import { connect } from 'react-redux/native';
import { pushEditorModalRoute } from '../../actions/editorModalRouteStack';
import router from '../../router';
import Element from './component';

const mapStateToProps = () => ({});

const actionCreators = (dispatch, ownProps) => ({
  onPressAddChild: () => console.log('TODO: pushEditorModalRoute for AddElementChildScene'),
  onPressAddProp: () => console.log('TODO: pushEditorModalRoute for AddElementPropScene'),
  onPressChild: (childIndex) => {
    console.log('ownProps:', ownProps);
    const child = ownProps.element.props.children[childIndex];
    return dispatch(pushEditorModalRoute(router.getElementRoute(child)));
  },
  onPressProp: () => console.log('TODO: pushEditorModalRoute for EditElementPropScene'),
});

export default connect(mapStateToProps, actionCreators)(Element);
export { Element };
