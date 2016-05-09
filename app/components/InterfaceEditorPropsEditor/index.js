import { connect } from 'react-redux';
import { setInterfaceEditorPropsEditorSelectedPropName } from '../../actions/interfaceEditorPropsEditorSelectedPropName';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponentElement';
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
  onChangePropValue: (elementPath, propName, propValue) => ({ type: 'TODO...SET_PROP_VALUE', elementPath, propName, propValue }),
  onPressAddProp: (elementPath, propName) => ({ type: 'TODO...SET_ELEMENT_PROP', elementPath, propName, propValue: null }),
  onPressDeleteProp: (elementPath, propName) => ({ type: 'TODO...DELETE_ELEMENT_PROP', elementPath, propName }),
  onPressDuplicateProp: (elementPath, propName, newPropName) => ({ type: 'TODO...DUPLICATE_ELEMENT_PROP', elementPath, propName, newPropName }),
  onPressProp: (propName) => setInterfaceEditorPropsEditorSelectedPropName(propName),
};

export default connect(mapStateToProps, actionCreators)(Component);
