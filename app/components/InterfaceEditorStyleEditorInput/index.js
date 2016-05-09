import { connect } from 'react-redux';
import { interfaceEditorStyleSheetEditorSelectedStyleName } from '../../selectors/interfaceEditorStyleSheetEditorSelectedStyleName';
import { interfaceEditorComponentStyleSheetStyleValueMapByStyleName } from '../../selectors/interfaceEditorComponentStyleSheet';
import Component from './component';

const mapStateToProps = (state) => {
  const styleSheetEditorSelectedStyleName = interfaceEditorStyleSheetEditorSelectedStyleName(state);
  const value = interfaceEditorComponentStyleSheetStyleValueMapByStyleName(styleSheetEditorSelectedStyleName)(state);

  return {
    value,
  };
};

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
