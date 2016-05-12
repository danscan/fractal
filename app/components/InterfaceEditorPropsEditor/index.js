import { connect } from 'react-redux';
import {
  applyInterfaceEditorComponentElementProp,
  duplicateInterfaceEditorComponentElementProp,
  removeInterfaceEditorComponentElementProp,
} from '../../actions/interfaceEditorComponentElement';
import { setInterfaceEditorPropsEditorSelectedPropName } from '../../actions/interfaceEditorPropsEditorSelectedPropName';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponentElement';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import { interfaceEditorPropsEditorSelectedPropName } from '../../selectors/interfaceEditorPropsEditorSelectedPropName';
import Component from './component';

const mapStateToProps = (state) => {
  const selectedElement = interfaceEditorSelectedElement(state);
  const selectedPropName = interfaceEditorPropsEditorSelectedPropName(state);

  return {
    props: selectedElement.get('props'),
    propTypes: selectedElement.get('type').propTypes,
    selectedElementPath: interfaceEditorSelectedElementPath(state),
    selectedProp: selectedElement.getIn(['props', selectedPropName]),
    selectedPropName,
  };
};

const actionCreators = {
  onChangePropValue: (elementPath, propName, propValue) => applyInterfaceEditorComponentElementProp(elementPath, propName, propValue),
  onPressAddProp: (elementPath, propName) => applyInterfaceEditorComponentElementProp(elementPath, propName, null),
  onPressDeleteProp: (elementPath, propName) => removeInterfaceEditorComponentElementProp(elementPath, propName),
  onPressDuplicateProp: (elementPath, propName, newPropName) => duplicateInterfaceEditorComponentElementProp(elementPath, propName, newPropName),
  onPressProp: (propName) => setInterfaceEditorPropsEditorSelectedPropName(propName),
};

export default connect(mapStateToProps, actionCreators)(Component);
