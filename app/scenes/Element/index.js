import { connect } from 'react-redux/native';
import {
  pushInspectorRoute,
} from '../../actions/inspector';
import { elementByElementPath } from '../../selectors/tree';
import router from '../../router';
import Element from './component';

const mapStateToProps = (state, ownProps) => ({
  element: elementByElementPath(ownProps.elementPath)(state),
});

const actionCreators = {
  onPressAddChild: (elementPath) => {
    return pushInspectorRoute(router.getCreateElementChildRoute({ elementPath }));
  },
  onPressAddProp: (elementPath) => {
    return pushInspectorRoute(router.getEditElementPropRoute({ elementPath }));
  },
  onPressChild: (elementPath, childIndex) => {
    const childElementPath = elementPath.push(childIndex);

    return pushInspectorRoute(router.getElementRoute({ elementPath: childElementPath }));
  },
  onPressProp: (elementPath, propName) => {
    return pushInspectorRoute(router.getEditElementPropRoute({ elementPath, propName }));
  },
};

export default connect(mapStateToProps, actionCreators)(Element);
export { Element };
