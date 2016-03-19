import { connect } from 'react-redux';
import { addInterfaceEditorComponentElementChild } from '../../actions/interfaceEditorComponents';
import elementTypeGroups from '../../constants/elementTypes';
import { interfaceEditorSelectedComponentKey } from '../../selectors/interfaceEditorSelectedComponentKey';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import elementByType from '../../utils/elementByType';
import Component from './component';

const mapStateToProps = (state) => ({
  elementTypeGroups,
  selectedComponentKey: interfaceEditorSelectedComponentKey(state),
  selectedElementPath: interfaceEditorSelectedElementPath(state),
});

const actionCreators = {
  onPressElementType: addInterfaceEditorComponentElementChild,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const onPressElementType = (elementType) => dispatchProps.onPressElementType(
    stateProps.selectedComponentKey,
    stateProps.selectedElementPath,
    elementByType(elementType.get('component')),
  );

  return {
    ...stateProps,
    ...dispatchProps,
    onPressElementType,
    ...ownProps,
  };
};

export default connect(mapStateToProps, actionCreators, mergeProps)(Component);
