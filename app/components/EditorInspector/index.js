import { connect } from 'react-redux/native';
import {
  selectElementPath,
  popInspectorRoute,
} from '../../actions/inspector';
import { hideElement } from '../../actions/tree';
import {
  currentRoute,
  previousRoute,
  selectedElement,
  selectedElementPath,
  selectedElementTitle,
} from '../../selectors/inspector';
import EditorInspector from './component';

const mapStateToProps = (state) => ({
  currentRoute: currentRoute(state),
  previousRoute: previousRoute(state),
  selectedElement: selectedElement(state),
  selectedElementPath: selectedElementPath(state),
  selectedElementTitle: selectedElementTitle(state),
});

const actionCreators = {
  selectElementPath,
  onPressBack: popInspectorRoute,
  onPressHide: hideElement,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onPressHide: () => dispatchProps.onPressHide(stateProps.selectedElementPath),
});

export default connect(mapStateToProps, actionCreators, mergeProps)(EditorInspector);
export { EditorInspector };
