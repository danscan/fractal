import analytics from 'react-native-redux-segment';
import thunk from 'redux-thunk';
import logger from './logger';

export default [
  thunk,
  logger,
  analytics({ writeKey: 'bLD29v49i26Gz6LJT1dyTPX6uzCF63sr' }),
];
