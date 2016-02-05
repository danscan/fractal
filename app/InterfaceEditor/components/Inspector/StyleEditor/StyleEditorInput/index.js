import { connect } from 'react-redux';
import { applyElementProp } from '../../../../actions/tree';
import { elementPropValueByElementPathAndPropName, elementPropTypeByElementPathAndPropName } from '../../../../selectors/tree';
import StyleEditorInput from './component';

const mapStateToProps = (state, ownProps) => ({
  propType: elementPropTypeByElementPathAndPropName(ownProps.elementPath, ownProps.propName)(state),
  value: elementPropValueByElementPathAndPropName(ownProps.elementPath, ownProps.propName)(state),
});

const actionCreators = (dispatch, ownProps) => ({
  onChangeValue: (value) => dispatch(applyElementProp(ownProps.elementPath, ownProps.propName, value)),
});

export default connect(mapStateToProps, actionCreators)(StyleEditorInput);
export { StyleEditorInput };
