import router from '../../router';
import { List } from 'immutable';

const initialSelectedElementPath = new List();

export default {
  routeStack: new List([router.getElementRoute({ elementPath: initialSelectedElementPath })]),
};
