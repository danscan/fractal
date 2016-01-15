import { connect } from 'react-redux/native';
import EditorWorkspace from './component';
import {
  beginPreview,
  endPreview,
} from '../../actions/preview';
import { selectPreview } from '../../selectors/preview';

const mapStateToProps = (state) => ({
  preview: selectPreview(state),
});

const actionCreators = {
  beginPreview,
  endPreview,
};

export default connect(mapStateToProps, actionCreators)(EditorWorkspace);
export { EditorWorkspace };
