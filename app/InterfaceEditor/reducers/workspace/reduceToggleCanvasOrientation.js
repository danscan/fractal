import { portraitOrientation, landscapeOrientation } from '../../constants/canvasOrientations';

export default function reduceToggleCanvasOrientation(state) {
  const canvasOrientation = state.get('canvasOrientation');
  const newCanvasOrientation = canvasOrientation === portraitOrientation
                              ? landscapeOrientation
                              : portraitOrientation;

  return state.set('canvasOrientation', newCanvasOrientation);
}
