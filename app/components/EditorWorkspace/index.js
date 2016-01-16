import { connect } from 'react-redux/native';
import EditorWorkspace from './component';
import {
  beginPreview,
  endPreview,
} from '../../actions/preview';
import { preview } from '../../selectors/preview';

const mapStateToProps = (state) => ({
  preview: preview(state),
});

const actionCreators = {
  beginPreview,
  endPreview,
};

export default connect(mapStateToProps, actionCreators)(EditorWorkspace);
export { EditorWorkspace };
