import { connect } from 'react-redux/native';
import { setSelectedTab } from '../../actions/inspector';
import { selectedTab } from '../../selectors/inspector';
import Inspector from './component';

const mapStateToProps = (state) => ({
  selectedTab: selectedTab(state),
});

const actionCreators = {
  onSelectTab: (tabIndex) => setSelectedTab(tabIndex),
};

export default connect(mapStateToProps, actionCreators)(Inspector);
export { Inspector };
