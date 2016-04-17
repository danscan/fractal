import { connect } from 'react-redux';
import { interfaceEditorSelectedElement } from '../../selectors/interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from '../../selectors/interfaceEditorSelectedElementPath';
import Component from './component';

const mapStateToProps = (state) => {
  const selectedElement = interfaceEditorSelectedElement(state);

  return {
    props: selectedElement.get('props'),
    propTypes: selectedElement.get('type').propTypes,
    selectedElementPath: interfaceEditorSelectedElementPath(state),
  };
};

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
