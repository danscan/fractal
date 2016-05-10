import { connect } from 'react-redux';
import { addInterfaceEditorComponentElementChild } from '../../actions/interfaceEditorComponentElement';
import elementTypeGroups from '../../constants/elementTypes';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import elementByType from '../../utils/elementByType';
import Component from './component';

const mapStateToProps = (state) => ({
  elementTypeGroups,
  selectedElementPath: interfaceEditorSelectedElementPath(state),
});

const actionCreators = {
  onPressElementType: addInterfaceEditorComponentElementChild,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const onPressElementType = (elementType) => dispatchProps.onPressElementType(
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
