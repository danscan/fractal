import { Map } from 'immutable';
import canvasDevices from '../../constants/canvasDevices';
import { landscapeOrientation } from '../../constants/canvasOrientations';

export default new Map({
  fullScreenPreview: false,
  canvasDevice: canvasDevices.first(),
  canvasOrientation: landscapeOrientation,
  canvasZoom: 0.5,
});
