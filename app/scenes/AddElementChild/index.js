import { connect } from 'react-redux/native';
import { addElement } from '../../actions/tree';
import { pushEditorModalRoute } from '../../actions/editorModalRouteStack';
import router from '../../router';
import AddElementChild from './component';

const mapStateToProps = () => ({});

const actionCreators = (dispatch, ownProps) => ({
  addElementChild: (elementChildType) => {
    const { parentElementPath } = ownProps;

    return dispatch(addElement(elementChildType, parentElementPath));

    // return pushEditorModalRoute(router.getElementRoute());
  },
});

export default connect(mapStateToProps, actionCreators)(AddElementChild);
export { AddElementChild };
