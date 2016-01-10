import React, { Component, Modal, PropTypes, View } from 'react-native';
import Element from './Element';
import { omit } from 'underscore';
import styles from './styles';

export default class Tree extends Component {
  static propTypes = {
    tree: PropTypes.object.isRequired,
  }

  renderElementFromNode(node, key) {
    const nodeProps = node.props || {};
    const nodePropsWithoutChildren = omit(node.props, 'children');
    const nodeChildren = nodeProps.children || [];

    return (
      <Element type={node.type} props={nodePropsWithoutChildren} key={key}>
        {nodeChildren.map((childNode, childKey) => this.renderElementFromNode(childNode, childKey))}
      </Element>
    );
  }

  render() {
    const {
      showingTree,
      tree,
    } = this.props;

    if (!showingTree) {
      return null;
    }

    return (
      <Modal animated transparent visible={showingTree}>
        <View style={styles.container}>
          {/*this.renderElementFromNode(tree)*/}
        </View>
      </Modal>
    );
  }
}
