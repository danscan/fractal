import { connect } from 'react-redux/native';
import CloseEditorModalButton from './component';
import { resetEditorModalRouteStack } from '../../../actions/editorModalRouteStack';

const mapStateToProps = () => ({});

const actionCreators = {
  onPress: () => resetEditorModalRouteStack(),
};

export default connect(mapStateToProps, actionCreators)(CloseEditorModalButton);
export { CloseEditorModalButton };
