import { connect } from 'react-redux/native';
import {
  selectedElement,
  selectedElementPath,
  selectedElementTitle,
} from '../../selectors/inspector';
import EditorInspector from './component';

const mapStateToProps = (state) => ({
  selectedElement: selectedElement(state),
  selectedElementPath: selectedElementPath(state),
  selectedElementTitle: selectedElementTitle(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(EditorInspector);
export { EditorInspector };
