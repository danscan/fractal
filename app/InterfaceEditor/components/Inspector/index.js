import { connect } from 'react-redux';
import { setSelectedTab } from '../../actions/inspector';
import { selectedElement } from '../../selectors/editor';
import { selectedTab } from '../../selectors/inspector';
import Inspector from './component';

const mapStateToProps = (state) => ({
  selectedElement: selectedElement(state),
  selectedTab: selectedTab(state),
});

const actionCreators = {
  onSelectTab: (tabIndex) => setSelectedTab(tabIndex),
};

export default connect(mapStateToProps, actionCreators)(Inspector);
export { Inspector };
