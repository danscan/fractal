import { connect } from 'react-redux/native';
import EditorWorkspace from './component';
import {
  beginPreview,
  endPreview,
} from '../../actions/preview';

const mapStateToProps = (state) => ({
  preview: state.preview,
});

const actionCreators = {
  beginPreview,
  endPreview,
};

export default connect(mapStateToProps, actionCreators)(EditorWorkspace);
export { EditorWorkspace };
