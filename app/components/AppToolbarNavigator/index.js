import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import logoButtonImage from '../../assets/img/logoButton.png';
import interfaceEditorButtonImage from '../../assets/img/interfaceEditorButton.png';
import schemaButtonImage from '../../assets/img/schemaButton.png';
import metricsButtonImage from '../../assets/img/metricsButton.png';
import styles from './styles';

export default class AppToolbarNavigator extends Component {
  static propTypes = {
    scene: PropTypes.element.isRequired,
  }

  renderToolbar() {
    return (
      <View style={styles.toolbar}>
        <View style={styles.toolbarLogoButton}>
          <Image style={styles.toolbarLogoButtonImage} source={logoButtonImage}/>
        </View>
        <TouchableOpacity style={[styles.toolbarButton, styles.toolbarButtonSelected]}>
          <Image style={styles.toolbarButtonImage} source={interfaceEditorButtonImage}/>
        </TouchableOpacity>
        <View style={[styles.toolbarButton, styles.toolbarButtonDisabled]}>
          <Image style={styles.toolbarButtonImage} source={schemaButtonImage}/>
        </View>
        <View style={[styles.toolbarButton, styles.toolbarButtonDisabled]}>
          <Image style={styles.toolbarButtonImage} source={metricsButtonImage}/>
        </View>
      </View>
    );
  }

  renderScene() {
    const { scene } = this.props;

    return (
      <View style={styles.scene}>
        {scene}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        {this.renderScene()}
      </View>
    );
  }
}
