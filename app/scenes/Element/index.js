import { connect } from 'react-redux/native';
import { selectElementPath, editElementProp, createElementChild } from '../../actions/inspector';
import { elementByElementPath } from '../../selectors/tree';
import Element from './component';

const mapStateToProps = (state, ownProps) => ({
  element: elementByElementPath(ownProps.elementPath)(state),
});

const actionCreators = dispatch => ({
  onPressAddChild: (elementPath) => {
    return dispatch(createElementChild(elementPath));
  },
  onPressAddProp: (elementPath) => {
    return dispatch(editElementProp(elementPath));
  },
  onPressChild: (elementPath, childIndex) => {
    const childElementPath = elementPath.push(childIndex);

    return dispatch(selectElementPath(childElementPath));
  },
  onPressProp: (elementPath, propName) => {
    return dispatch(editElementProp(elementPath, propName));
  },
});

export default connect(mapStateToProps, actionCreators)(Element);
export { Element };
