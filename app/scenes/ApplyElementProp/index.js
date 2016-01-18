import { connect } from 'react-redux/native';
import { selectElementPath } from '../../actions/inspector';
import { applyElementProp } from '../../actions/tree';
import { elementPropValueByElementTreePathAndPropName } from '../../selectors/tree';
import AddElementChild from './component';

const mapStateToProps = (state, ownProps) => ({
  propValue: elementPropValueByElementTreePathAndPropName(ownProps.elementPath, ownProps.propName)(state),
});

const actionCreators = (dispatch) => ({
  onPressApply: (elementPath, propName, propValue) => {
    dispatch(applyElementProp(elementPath, propName, propValue));

    return dispatch(selectElementPath(elementPath.pop()));
  },
});

export default connect(mapStateToProps, actionCreators)(AddElementChild);
export { AddElementChild };
