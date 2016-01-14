import { connect } from 'react-redux/native';
import { pushEditorModalRoute } from '../../actions/editorModalRouteStack';
import { selectElementWithElementPath } from '../../selectors/tree';
import router from '../../router';
import Element from './component';

const mapStateToProps = (state, ownProps) => ({
  element: selectElementWithElementPath(ownProps.elementPath)(state),
});

const actionCreators = dispatch => ({
  onPressAddChild: (elementPath) => {
    return dispatch(pushEditorModalRoute(router.getAddElementChildRoute(elementPath)));
  },
  onPressAddProp: (elementPath) => {
    dispatch(navigateToApplyProp(elementPath));
  },
  onPressChild: (elementPath, childIndex) => {
    const childElementPath = [...elementPath, 'props', 'children', childIndex];

    return dispatch(pushEditorModalRoute(router.getElementRoute(childElementPath)));
  },
  onPressProp: (elementPath, propName, propValue) => {
    dispatch(navigateToApplyProp(elementPath, propName, propValue));
  },
});

export default connect(mapStateToProps, actionCreators)(Element);
export { Element };

function navigateToApplyProp(elementPath, propName, propValue) {
  return pushEditorModalRoute(router.getApplyElementPropRoute(elementPath, propName, propValue));
}
