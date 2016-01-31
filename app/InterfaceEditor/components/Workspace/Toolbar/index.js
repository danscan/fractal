import { connect } from 'react-redux/native';
import { beginFullScreenPreview, setCanvasZoom, toggleCanvasOrientation } from '../../../actions/workspace';
import { canvasDevice, canvasOrientation, canvasZoom } from '../../../selectors/workspace';
import Toolbar from './component';

const mapStateToProps = (state) => ({
  canvasDevice: canvasDevice(state),
  canvasOrientation: canvasOrientation(state),
  canvasZoom: canvasZoom(state),
});

const actionCreators = {
  onPressBeginFullScreenPreview: beginFullScreenPreview,
  onPressCanvasOrientation: toggleCanvasOrientation,
  setCanvasZoom,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
