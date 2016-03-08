import { createElement } from 'react-native';
import Runner from './Runner';

export default function run(Component) {
  return createElement(Runner, { Component });
}
