import { connect } from 'react-redux';
import { interfaceEditorCanvasDevice } from '../../selectors/interfaceEditorCanvasDevice';
import { interfaceEditorCanvasOrientation } from '../../selectors/interfaceEditorCanvasOrientation';
import { interfaceEditorCanvasZoom } from '../../selectors/interfaceEditorCanvasZoom';
import { setInterfaceEditorCanvasDevice } from '../../actions/interfaceEditorCanvasDevice';
import { toggleInterfaceEditorCanvasOrientation } from '../../actions/interfaceEditorCanvasOrientation';
import { setInterfaceEditorCanvasZoom } from '../../actions/interfaceEditorCanvasZoom';
import { setInterfaceEditorFullscreenPreview } from '../../actions/interfaceEditorFullscreenPreview';
import canvasDevices from '../../constants/canvasDevices';
import Component from './component';

const mapStateToProps = (state) => ({
  canvasDevice: interfaceEditorCanvasDevice(state),
  canvasOrientation: interfaceEditorCanvasOrientation(state),
  canvasZoom: interfaceEditorCanvasZoom(state),
});

const actionCreators = {
  onPressBeginFullScreenPreview: () => setInterfaceEditorFullscreenPreview(true),
  onPressCanvasDevice: (currentCanvasDevice) => {
    const currentCanvasDeviceIndex = canvasDevices.indexOf(currentCanvasDevice);
    const nextCanvasDeviceIndex = (currentCanvasDeviceIndex + 1) >= canvasDevices.size
                                ? 0
                                : currentCanvasDeviceIndex + 1;
    const nextCanvasDevice = canvasDevices.get(nextCanvasDeviceIndex);

    return setInterfaceEditorCanvasDevice(nextCanvasDevice);
  },
  onPressCanvasOrientation: () => toggleInterfaceEditorCanvasOrientation(),
  setCanvasZoom: setInterfaceEditorCanvasZoom,
};

export default connect(mapStateToProps, actionCreators)(Component);
