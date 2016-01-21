import { connect } from 'react-redux/native';
import { applyElementProp } from '../../actions/tree';
import { elementPropValueByElementPathAndPropName } from '../../selectors/tree';
import AddElementChild from './component';

const mapStateToProps = (state, ownProps) => ({
  propValue: elementPropValueByElementPathAndPropName(ownProps.elementPath, ownProps.propName)(state),
});

const actionCreators = (dispatch) => ({
  onPressApply: (elementPath, propName, propValue) => {
    return dispatch(applyElementProp(elementPath, propName, propValue));
  },
});

export default connect(mapStateToProps, actionCreators)(AddElementChild);
export { AddElementChild };
