import { connect } from 'react-redux';
import { interfaceEditorCanvasDevice } from '../../selectors/interfaceEditorCanvasDevice';
import { interfaceEditorCanvasOrientation } from '../../selectors/interfaceEditorCanvasOrientation';
import { interfaceEditorCanvasZoom } from '../../selectors/interfaceEditorCanvasZoom';
import Component from './component';

const mapStateToProps = (state) => ({
  canvasDevice: interfaceEditorCanvasDevice(state),
  canvasOrientation: interfaceEditorCanvasOrientation(state),
  canvasZoom: interfaceEditorCanvasZoom(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
