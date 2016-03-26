import { connect } from 'react-redux';
import { interfaceEditorCanvasDevice } from '../../selectors/interfaceEditorCanvasDevice';
import { interfaceEditorCanvasOrientation } from '../../selectors/interfaceEditorCanvasOrientation';
import { interfaceEditorCanvasZoom } from '../../selectors/interfaceEditorCanvasZoom';
import { interfaceEditorComponentTree } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => ({
  canvasDevice: interfaceEditorCanvasDevice(state),
  canvasOrientation: interfaceEditorCanvasOrientation(state),
  canvasZoom: interfaceEditorCanvasZoom(state),
  selectedElementPath: interfaceEditorSelectedElementPath(state),
  treeRootElement: interfaceEditorComponentTree(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
