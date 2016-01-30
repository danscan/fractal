import { connect } from 'react-redux/native';
import { setSelectedElementPath } from '../../../actions/editor';
import { hideElement, removeElement } from '../../../actions/tree';
import { selectedElementPath } from '../../../selectors/editor';
import { treeRootElement } from '../../../selectors/tree';
import Navigator from './component';

const mapStateToProps = (state) => ({
  selectedElementPath: selectedElementPath(state),
  root: treeRootElement(state),
});

const actionCreators = {
  onPressHide: (elementPath) => hideElement(elementPath),
  onPressDelete: (elementPath) => removeElement(elementPath),
  onSelectElement: (elementPath) => setSelectedElementPath(elementPath),
};

export default connect(mapStateToProps, actionCreators)(Navigator);
export { Navigator };