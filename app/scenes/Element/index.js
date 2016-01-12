import { connect } from 'react-redux/native';
import { pushEditorModalRoute } from '../../actions/editorModalRouteStack';
import router from '../../router';
import Element from './component';

const mapStateToProps = () => ({});

const actionCreators = (dispatch, ownProps) => ({
  onPressAddChild: (parentElementIndex) => {
    return dispatch(pushEditorModalRoute(router.getAddElementRoute(parentElementIndex)));
  },
  onPressAddProp: () => console.log('TODO: pushEditorModalRoute for AddElementPropScene'),
  onPressChild: (childIndex) => {
    const {
      element,
      elementIndex,
    } = ownProps;
    const child = element.props.children[childIndex];
    const childElementIndex = [...elementIndex, childIndex];
    return dispatch(pushEditorModalRoute(router.getElementRoute(child, childElementIndex)));
  },
  onPressProp: () => console.log('TODO: pushEditorModalRoute for EditElementPropScene'),
});

export default connect(mapStateToProps, actionCreators)(Element);
export { Element };
