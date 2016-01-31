import { connect } from 'react-redux/native';
import { applyElementProp } from '../../../selectors/tree';
import { selectedElement, selectedElementPath } from '../../../selectors/editor';
import PropsEditor from './component';

const mapStateToProps = (state) => ({
  selectedElement: selectedElement(state),
  selectedElementPath: selectedElementPath(state),
});

const actionCreators = {
  applyElementProp,
};

export default connect(mapStateToProps, actionCreators)(PropsEditor);
export { PropsEditor };
