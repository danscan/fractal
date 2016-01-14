import { connect } from 'react-redux/native';
import { addElementChild } from '../../actions/tree';
import { popEditorModalRoute } from '../../actions/editorModalRouteStack';
import AddElementChild from './component';

const mapStateToProps = () => ({});

const actionCreators = (dispatch) => ({
  addElementChild: (elementPath, childType) => {
    const childElement = { type: childType, props: {} };

    dispatch(addElementChild(elementPath, childElement));

    return dispatch(popEditorModalRoute());
  },
});

export default connect(mapStateToProps, actionCreators)(AddElementChild);
export { AddElementChild };
