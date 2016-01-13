import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import hideEditorButtonImage from '../../assets/img/closeButton.png';
import showTreeButtonImage from '../../assets/img/showTreeButton.png';
import styles from './styles';

export default class EditorToolbar extends Component {
  static propTypes = {
    tree: PropTypes.object.isRequired,
    onPressHideEditor: PropTypes.func.isRequired,
    onPressShowTree: PropTypes.func.isRequired,
  }

  renderShowTreeButton() {
    const {
      onPressShowTree,
      tree,
    } = this.props;

    return (
      <TouchableOpacity onPress={() => onPressShowTree(tree)} style={styles.button}>
        <Image source={showTreeButtonImage} style={styles.showTreeButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderHideEditorButton() {
    const { onPressHideEditor } = this.props;

    return (
      <TouchableOpacity onPress={() => onPressHideEditor()} style={styles.button}>
        <Image source={hideEditorButtonImage} style={styles.hideEditorButtonImage}/>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftButtons}>
          {this.renderShowTreeButton()}
        </View>
        <View style={styles.rightButtons}>
          {this.renderHideEditorButton()}
        </View>
      </View>
    );
  }
}
