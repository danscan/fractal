import { connect } from 'react-redux';
import { setInterfaceEditorPropsEditorSelectedPropName } from '../../actions/interfaceEditorPropsEditorSelectedPropName';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorPropsEditorSelectedPropName } from '../../selectors/interfaceEditorPropsEditorSelectedPropName';
import Component from './component';

const mapStateToProps = (state) => {
  const selectedElement = interfaceEditorSelectedElement(state);

  return {
    props: selectedElement.get('props'),
    propTypes: selectedElement.get('type').propTypes,
    selectedElementPath: interfaceEditorSelectedElementPath(state),
    selectedPropName: interfaceEditorPropsEditorSelectedPropName(state),
  };
};

const actionCreators = {
  onPressDeleteProp: (elementPath, propName) => ({ type: 'TODO...DELETE_ELEMENT_PROP', elementPath, propName }),
  onPressDuplicateProp: (elementPath, propName) => ({ type: 'TODO...SET_ELEMENT_PROP', elementPath, propName, propValue: null }),
  onPressProp: (propName) => setInterfaceEditorPropsEditorSelectedPropName(propName),
};

export default connect(mapStateToProps, actionCreators)(Component);
