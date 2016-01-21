import React, { Component, Image, PropTypes, StatusBarIOS, TouchableOpacity, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import endFullScreenPreviewButtonImage from '../../assets/img/closeButton.png';
import EditorInspector from '../EditorInspector';
import EditorToolbar from '../EditorToolbar';
import Element from '../Element';
import styles from './styles';

export default class EditorWorkspace extends Component {
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

  renderInspectorSection() {
    return (
      <View style={styles.inspectorSection}>
        <EditorInspector/>
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
        <EditorToolbar/>
        <View style={styles.contentSection}>
          {this.renderPreviewSection()}
          {this.renderInspectorSection()}
        </View>
      </View>
    );
  }
}
