import { createElement, Component, PropTypes } from 'react-native';
import { omit } from 'underscore';

export default class Root extends Component {
  static propTypes = {
    tree: PropTypes.object.isRequired,
  }

  createElementFromNode(node, key) {
    if (typeof node === 'string') {
      return node;
    }

    const { type: nodeType, props = {} } = node || {};
    const { children = [] } = props;
    const nodeProps = { ...omit(props, 'children'), key };
    const nodeChildren = children.map((childNode, childKey) => this.createElementFromNode(childNode, childKey));

    return createElement(nodeType, nodeProps, nodeChildren);
  }

  render() {
    const { tree } = this.props;
    const rootNode = tree.get();

    return this.createElementFromNode(rootNode);
  }
}
