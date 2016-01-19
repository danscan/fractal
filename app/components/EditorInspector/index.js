import { connect } from 'react-redux/native';
import { selectElementPath } from '../../actions/inspector';
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
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onPressBack: !!stateProps.selectedElementPath.size
    ? () => dispatchProps.selectElementPath(stateProps.selectedElementPath.pop())
    : null,
});

export default connect(mapStateToProps, actionCreators, mergeProps)(EditorInspector);
export { EditorInspector };
