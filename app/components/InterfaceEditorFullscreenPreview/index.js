import { connect } from 'react-redux';
import { setInterfaceEditorFullscreenPreview } from '../../actions/interfaceEditorFullscreenPreview';
import { interfaceEditorFullscreenPreview } from '../../selectors/interfaceEditorFullscreenPreview';
import Component from './component';

const mapStateToProps = (state) => ({
  visible: interfaceEditorFullscreenPreview(state),
});

const actionCreators = {
  onPressClose: () => setInterfaceEditorFullscreenPreview(false),
};

export default connect(mapStateToProps, actionCreators)(Component);
