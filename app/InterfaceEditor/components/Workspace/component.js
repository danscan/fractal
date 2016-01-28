import React, { Component, Image, PropTypes, StatusBarIOS, TouchableOpacity, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import endFullScreenPreviewButtonImage from '../../assets/img/closeButton.png';
import Toolbar from './Toolbar';
import Element from './Element';
import styles from './styles';

export default class Workspace extends Component {
  static propTypes = {
    beginFullScreenPreview: PropTypes.func.isRequired,
    endFullScreenPreview: PropTypes.func.isRequired,
    fullScreenPreview: PropTypes.bool.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
    treeRootElement: elementPropType.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  }

  renderFullScreenPreview() {
    const { treeRootElement } = this.props;

    // TODO: Animate style changes when fullScreenPreview prop changes...
    return (
      <View style={styles.container}>
        <Element element={treeRootElement}/>
        {this.renderFullScreenPreviewButton()}
      </View>
    );
  }

  renderFullScreenPreviewButton() {
    const { endFullScreenPreview } = this.props;

    return (
      <TouchableOpacity onPress={() => endFullScreenPreview()} style={styles.endFullScreenPreviewButton}>
        <Image source={endFullScreenPreviewButtonImage} style={styles.endFullScreenPreviewButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderPreviewSection() {
    const {
      treeRootElement,
      selectedElementPath,
    } = this.props;

    return (
      <View style={styles.previewSection}>
        <View style={styles.previewElementWrapper}>
          <Element element={treeRootElement} callOutPath={selectedElementPath}/>
        </View>
      </View>
    );
  }

  render() {
    const {
      fullScreenPreview,
    } = this.props;

    if (fullScreenPreview) {
      return this.renderFullScreenPreview();
    }

    return (
      <View style={styles.container}>
        <Toolbar/>
        <View style={styles.contentSection}>
          {this.renderPreviewSection()}
        </View>
      </View>
    );
  }
}
