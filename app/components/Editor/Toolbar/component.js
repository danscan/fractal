import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import showTreeButtonImage from '../../../assets/img/showTreeButton.png';
import styles from './styles';

export default class Toolbar extends Component {
  static propTypes = {
    showTree: PropTypes.func.isRequired,
  }

  renderShowTreeButton() {
    const { showTree } = this.props;

    return (
      <TouchableOpacity onPress={() => showTree()} style={styles.button}>
        <Image source={showTreeButtonImage} style={styles.buttonImage}/>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          {this.renderShowTreeButton()}
        </View>
      </View>
    );
  }
}
