import { connect } from 'react-redux';
import { setPropInputType, setPropSectionExpanded } from '../../../../actions/propsEditor';
import { applyElementProp, removeElementProp } from '../../../../actions/tree';
import { sectionIsExpanded, propInputType } from '../../../../selectors/propsEditor';
import { elementPropValueByElementPathAndPropName } from '../../../../selectors/tree';
import PropsEditor from './component';

const mapStateToProps = (state, ownProps) => ({
  isExpanded: sectionIsExpanded(ownProps.propName)(state),
  inputType: propInputType(ownProps.propName)(state),
  propValue: elementPropValueByElementPathAndPropName(ownProps.elementPath, ownProps.propName)(state),
});

const actionCreators = (dispatch, ownProps) => ({
  onChangePropValue: (propValue) => dispatch(applyElementProp(ownProps.elementPath, ownProps.propName, propValue)),
  onPressDelete: () => dispatch(removeElementProp(ownProps.elementPath, ownProps.propName)),
  onPressPropInputType: (_propInputType) => dispatch(setPropInputType(ownProps.propName, _propInputType)),
  onPressToggleExpanded: (expanded) => dispatch(setPropSectionExpanded(ownProps.propName, expanded)),
});

export default connect(mapStateToProps, actionCreators)(PropsEditor);
export { PropsEditor };
