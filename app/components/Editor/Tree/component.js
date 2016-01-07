import React, { Component, PropTypes, View } from 'react-native';
import Element from './Element';
import styles from './styles';

export default class Tree extends Component {
  static propTypes = {
    showingTree: PropTypes.bool.isRequired,
  }

  render() {
    const { showingTree } = this.props;
    const containerStyle = showingTree
                          ? styles.container
                          : [styles.container, { opacity: 0 }];

    return (
      <View pointerEvents="none" style={styles.wrapper}>
        <View pointerEvents="none" style={styles.maximum}/>
        <View style={containerStyle}>
          <Element type="Root">
            <Element type="Text" props={{ style: { color: '#666', fontFamily: 'Avenir', fontSize: 20 } }}>
              Your app root
            </Element>
          </Element>
        </View>
      </View>
    );
  }
}
