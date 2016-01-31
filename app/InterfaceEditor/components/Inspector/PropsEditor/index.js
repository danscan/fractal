import { connect } from 'react-redux/native';
import { selectedElement, selectedElementPath } from '../../../selectors/editor';
import PropsEditor from './component';

const mapStateToProps = (state) => ({
  selectedElement: selectedElement(state),
  selectedElementPath: selectedElementPath(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(PropsEditor);
export { PropsEditor };
