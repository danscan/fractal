import { createElement, Component, PropTypes } from 'react-native';
import { omit } from 'underscore';

export default class Root extends Component {
  static propTypes = {
    tree: PropTypes.object.isRequired,
  }

  createElementFromNode(node) {
    if (typeof node === 'string') {
      return node;
    }

    const { type: nodeType, props = {} } = node || {};
    const { children } = props;
    const nodeProps = omit(props, 'children');
    const nodeChildren = children.map(childNode => this.createElementFromNode(childNode));

    return createElement(nodeType, nodeProps, nodeChildren);
  }

  render() {
    const { tree } = this.props;

    return this.createElementFromNode(tree);
  }
}
