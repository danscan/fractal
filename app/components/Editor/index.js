import { connect } from 'react-redux/native';
import Editor from './component';
import { toggleEditor } from '../../actions/editing';

const mapStateToProps = (state) => ({
  editing: state.editing,
});

const actionCreators = {
  toggleEditor,
};

export default connect(mapStateToProps, actionCreators)(Editor);
export { Editor };
