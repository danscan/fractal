import { connect } from 'react-redux/native';
import { applyElementProp } from '../../actions/tree';
import { elementPropTypeByElementPathAndPropName, elementPropValueByElementPathAndPropName } from '../../selectors/tree';
import AddElementChild from './component';

const mapStateToProps = (state, ownProps) => ({
  propType: elementPropTypeByElementPathAndPropName(ownProps.elementPath, ownProps.propName)(state),
  propValue: elementPropValueByElementPathAndPropName(ownProps.elementPath, ownProps.propName)(state),
});

const actionCreators = (dispatch) => ({
  onPressApply: (elementPath, propName, propValue) => {
    return dispatch(applyElementProp(elementPath, propName, propValue));
  },
});

export default connect(mapStateToProps, actionCreators)(AddElementChild);
export { AddElementChild };
