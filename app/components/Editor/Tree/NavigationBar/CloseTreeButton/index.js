import { connect } from 'react-redux/native';
import CloseTreeButton from './component';
import { hideTree } from '../../../../../actions/showingTree';

const mapStateToProps = () => ({});

const actionCreators = {
  onPress: hideTree,
};

export default connect(mapStateToProps, actionCreators)(CloseTreeButton);
export { CloseTreeButton };
