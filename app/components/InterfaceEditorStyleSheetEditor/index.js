import { connect } from 'react-redux';
import { interfaceEditorStyleSheetEditorSelectedStyleName } from '../../selectors/interfaceEditorStyleSheetEditorSelectedStyleName';
import { setInterfaceEditorStyleSheetEditorSelectedStyleName } from '../../actions/interfaceEditorStyleSheetEditorSelectedStyleName';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedProp: interfaceEditorStyleSheetEditorSelectedStyleName(state),
});

const actionCreators = {
  setSelectedProp: setInterfaceEditorStyleSheetEditorSelectedStyleName,
};

export default connect(mapStateToProps, actionCreators)(Component);
