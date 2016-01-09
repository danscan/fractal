import { connect } from 'react-redux/native';
import Toolbar from './component';
import { closeEditor } from '../../../actions/editing';
import { showTree } from '../../../actions/showingTree';

const mapStateToProps = () => ({});

const actionCreators = {
  closeEditor,
  showTree,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
