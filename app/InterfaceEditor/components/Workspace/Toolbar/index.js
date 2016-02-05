import { connect } from 'react-redux';
import { beginFullScreenPreview, setCanvasZoom, setCanvasDevice, toggleCanvasOrientation } from '../../../actions/workspace';
import { canvasDevice, canvasOrientation, canvasZoom } from '../../../selectors/workspace';
import canvasDevices from '../../../constants/canvasDevices';
import Toolbar from './component';

const mapStateToProps = (state) => ({
  canvasDevice: canvasDevice(state),
  canvasOrientation: canvasOrientation(state),
  canvasZoom: canvasZoom(state),
});

const actionCreators = {
  onPressBeginFullScreenPreview: beginFullScreenPreview,
  onPressCanvasDevice: (currentCanvasDevice) => {
    const currentCanvasDeviceIndex = canvasDevices.indexOf(currentCanvasDevice);
    const nextCanvasDeviceIndex = (currentCanvasDeviceIndex + 1) >= canvasDevices.size
                                ? 0
                                : currentCanvasDeviceIndex + 1;
    const nextCanvasDevice = canvasDevices.get(nextCanvasDeviceIndex);

    return setCanvasDevice(nextCanvasDevice);
  },
  onPressCanvasOrientation: toggleCanvasOrientation,
  setCanvasZoom,
};

export default connect(mapStateToProps, actionCreators)(Toolbar);
export { Toolbar };
