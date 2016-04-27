import { connect } from 'react-redux';
import { setInterfaceEditorPropsEditorSelectedProp } from '../../actions/interfaceEditorPropsEditorSelectedProp';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorPropsEditorSelectedProp } from '../../selectors/interfaceEditorPropsEditorSelectedProp';
import Component from './component';

const mapStateToProps = (state) => {
  const selectedElement = interfaceEditorSelectedElement(state);

  return {
    props: selectedElement.get('props'),
    propTypes: selectedElement.get('type').propTypes,
    selectedElementPath: interfaceEditorSelectedElementPath(state),
    selectedProp: interfaceEditorPropsEditorSelectedProp(state),
  };
};

const actionCreators = {
  onPressDeleteProp: (elementPath, propName) => ({ type: 'TODO...DELETE_ELEMENT_PROP', elementPath, propName }),
  onPressDuplicateProp: (elementPath, propName) => ({ type: 'TODO...SET_ELEMENT_PROP', elementPath, propName, propValue: null }),
  onPressProp: (propName) => setInterfaceEditorPropsEditorSelectedProp(propName),
};

export default connect(mapStateToProps, actionCreators)(Component);
