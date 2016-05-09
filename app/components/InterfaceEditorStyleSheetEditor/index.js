import { connect } from 'react-redux';
import {
  setInterfaceEditorComponentStyleSheetStyle,
  addInterfaceEditorComponentStyleSheetStyle,
  deleteInterfaceEditorComponentStyleSheetStyle,
  duplicateInterfaceEditorComponentStyleSheetStyle,
} from '../../actions/interfaceEditorComponentStyleSheet';
import { setInterfaceEditorStyleSheetEditorSelectedStyleName } from '../../actions/interfaceEditorStyleSheetEditorSelectedStyleName';
import { interfaceEditorComponentStyleSheetStyleMap } from '../../selectors/interfaceEditorComponentStyleSheet';
import { interfaceEditorStyleSheetEditorSelectedStyleName } from '../../selectors/interfaceEditorStyleSheetEditorSelectedStyleName';
import Component from './component';

const mapStateToProps = (state) => ({
  selectedStyleName: interfaceEditorStyleSheetEditorSelectedStyleName(state),
  styleSheetMap: interfaceEditorComponentStyleSheetStyleMap(state),
});

const actionCreators = {
  onChangeStyleValue: (styleName, styleValue) => setInterfaceEditorComponentStyleSheetStyle(styleName, styleValue),
  onPressAddStyle: (styleName) => addInterfaceEditorComponentStyleSheetStyle(styleName),
  onPressDeleteStyle: (styleName) => deleteInterfaceEditorComponentStyleSheetStyle(styleName),
  onPressDuplicateStyle: (styleName, newStyleName) => duplicateInterfaceEditorComponentStyleSheetStyle(styleName, newStyleName),
  setSelectedStyleName: setInterfaceEditorStyleSheetEditorSelectedStyleName,
};

export default connect(mapStateToProps, actionCreators)(Component);
