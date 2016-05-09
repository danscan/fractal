import { connect } from 'react-redux';
import {
  applyInterfaceEditorComponentElementProp,
  removeInterfaceEditorComponentElementProp,
} from '../../actions/interfaceEditorComponentElement';
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
  onChangePropValue: (elementPath, propName, propValue) => applyInterfaceEditorComponentElementProp(elementPath, propName, propValue),
  onPressAddProp: (elementPath, propName) => applyInterfaceEditorComponentElementProp(elementPath, propName, null),
  onPressDeleteProp: (elementPath, propName) => removeInterfaceEditorComponentElementProp(elementPath, propName),
  onPressDuplicateProp: (elementPath, propName, newPropName) => ({ type: 'TODO...DUPLICATE_ELEMENT_PROP', elementPath, propName, newPropName }),
  onPressProp: (propName) => setInterfaceEditorPropsEditorSelectedPropName(propName),
};

export default connect(mapStateToProps, actionCreators)(Component);
