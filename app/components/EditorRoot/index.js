import { connect } from 'react-redux/native';
import EditorRoot from './component';
import { toggleEditor } from '../../actions/showEditor';

const mapStateToProps = (state) => ({
  showEditor: state.showEditor,
});

const actionCreators = {
  toggleEditor,
};

export default connect(mapStateToProps, actionCreators)(EditorRoot);
export { EditorRoot };
