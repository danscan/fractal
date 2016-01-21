import { connect } from 'react-redux/native';
import { replaceInspectorRoute } from '../../actions/inspector';
import { addElementChild } from '../../actions/tree';
import elementByType from '../../utils/elementByType';
import router from '../../router';
import AddElementChild from './component';

const mapStateToProps = () => ({});

const actionCreators = (dispatch) => ({
  addElementChild: (elementPath, childType) => {
    const childElement = elementByType(childType);

    dispatch(addElementChild(elementPath, childElement));

    return dispatch(replaceInspectorRoute(router.getElementRoute({ elementPath })));
  },
});

export default connect(mapStateToProps, actionCreators)(AddElementChild);
export { AddElementChild };
