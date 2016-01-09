import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import closeEditorButtonImage from '../../../assets/img/closeButton.png';
import showTreeButtonImage from '../../../assets/img/showTreeButton.png';
import styles from './styles';

export default class Toolbar extends Component {
  static propTypes = {
    closeEditor: PropTypes.func.isRequired,
    showTree: PropTypes.func.isRequired,
  }

  renderShowTreeButton() {
    const { showTree } = this.props;

    return (
      <TouchableOpacity onPress={() => showTree()} style={styles.button}>
        <Image source={showTreeButtonImage} style={styles.showTreeButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderCloseEditorButton() {
    const { closeEditor } = this.props;

    return (
      <TouchableOpacity onPress={() => closeEditor()} style={styles.button}>
        <Image source={closeEditorButtonImage} style={styles.closeEditorButtonImage}/>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          {this.renderShowTreeButton()}
        </View>
        <View style={styles.buttonsRight}>
          {this.renderCloseEditorButton()}
        </View>
      </View>
    );
  }
}
