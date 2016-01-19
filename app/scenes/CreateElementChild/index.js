import { connect } from 'react-redux/native';
import { selectElementPath } from '../../actions/inspector';
import { addElementChild } from '../../actions/tree';
import AddElementChild from './component';

const mapStateToProps = () => ({});

const actionCreators = (dispatch) => ({
  addElementChild: (elementPath, childType) => {
    const childElement = { type: childType, props: { children: [] } };

    dispatch(addElementChild(elementPath, childElement));

    return dispatch(selectElementPath(elementPath.pop()));
  },
});

export default connect(mapStateToProps, actionCreators)(AddElementChild);
export { AddElementChild };
