import thunk from 'redux-thunk';
import logger from './logger';
import analytics from './analytics';

export default [
  thunk,
  logger,
  analytics({ writeKey: 'bLD29v49i26Gz6LJT1dyTPX6uzCF63sr' }),
];
