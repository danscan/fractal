import { connect } from 'react-redux/native';
import { hideAddElementModal } from '../../../actions/editor';
import { addElementChild } from '../../../actions/tree';
import { selectedElementPath } from '../../../selectors/editor';
import elementByType from '../../../utils/elementByType';
import Editor from './component';

const mapStateToProps = (state) => ({
  selectedElementPath: selectedElementPath(state),
});

const actionCreators = {
  addElementChild,
  hideAddElementModal,
  onPressOutsideModal: hideAddElementModal,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onPressElementType: (elementType) => {
    dispatchProps.addElementChild(stateProps.selectedElementPath, elementByType(elementType.get('component')));
    dispatchProps.hideAddElementModal();
  },
});

export default connect(mapStateToProps, actionCreators, mergeProps)(Editor);
export { Editor };
