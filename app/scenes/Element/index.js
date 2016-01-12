import { connect } from 'react-redux/native';
import { addElement, addElementProp, editElementProp } from '../../actions/tree';
import Element from './component';

const mapStateToProps = () => ({});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Element);
export { Element };
