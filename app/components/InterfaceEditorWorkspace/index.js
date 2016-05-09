import { connect } from 'react-redux';
import { interfaceEditorCanvasDevice } from '../../selectors/interfaceEditorCanvasDevice';
import { interfaceEditorCanvasOrientation } from '../../selectors/interfaceEditorCanvasOrientation';
import { interfaceEditorCanvasZoom } from '../../selectors/interfaceEditorCanvasZoom';
import { interfaceEditorComponentElementTree } from '../../selectors/interfaceEditorComponentElement';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => ({
  canvasDevice: interfaceEditorCanvasDevice(state),
  canvasOrientation: interfaceEditorCanvasOrientation(state),
  canvasZoom: interfaceEditorCanvasZoom(state),
  selectedElementPath: interfaceEditorSelectedElementPath(state),
  treeRootElement: interfaceEditorComponentElementTree(state),
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
