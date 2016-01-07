import React, { Component, PropTypes, Text, View } from 'react-native';
import Element from './Element';
import { omit } from 'underscore';
import styles from './styles';

export default class Tree extends Component {
  static propTypes = {
    showingTree: PropTypes.bool.isRequired,
    tree: PropTypes.object.isRequired,
  }

  renderElementFromNode(node, key) {
    if (typeof node === 'string') {
      return <Text style={styles.nodeValueLabel} key={key}>{node}</Text>;
    }

    const nodeProps = omit(node.props, 'children');
    const nodeChildren = node.props.children || [];

    return (
      <Element type={node.type} props={nodeProps} key={key}>
        {nodeChildren.map((childNode, childKey) => this.renderElementFromNode(childNode, childKey))}
      </Element>
    );
  }

  render() {
    const {
      showingTree,
      tree,
    } = this.props;
    const containerStyle = showingTree
                          ? styles.container
                          : [styles.container, { opacity: 0 }];

    return (
      <View pointerEvents="none" style={styles.wrapper}>
        <View pointerEvents="none" style={styles.maximum}/>
        <View style={containerStyle}>
          {this.renderElementFromNode(tree)}
        </View>
      </View>
    );
  }
}
