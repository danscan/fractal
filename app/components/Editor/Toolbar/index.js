import { connect } from 'react-redux/native';
import Toolbar from './component';
import { closeEditor } from '../../../actions/showEditor';

const mapStateToProps = () => ({});

const actionCreators = {
  closeEditor,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
