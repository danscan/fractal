import { connect } from 'react-redux/native';
import { applyElementProp } from '../../actions/tree';
import { popEditorModalRoute } from '../../actions/editorModalRouteStack';
import { elementPropValueByElementTreePathAndPropName } from '../../selectors/tree';
import AddElementChild from './component';

const mapStateToProps = (state, ownProps) => ({
  propValue: elementPropValueByElementTreePathAndPropName(ownProps.elementPath, ownProps.propName)(state),
});

const actionCreators = (dispatch) => ({
  onPressApply: (elementPath, propName, propValue) => {
    dispatch(applyElementProp(elementPath, propName, propValue));

    return dispatch(popEditorModalRoute());
  },
});

export default connect(mapStateToProps, actionCreators)(AddElementChild);
export { AddElementChild };
