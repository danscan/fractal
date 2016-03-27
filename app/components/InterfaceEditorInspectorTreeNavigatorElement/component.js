import React, {
  Component,
  Image,
  PropTypes,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

// (Image assets)
import collapsedSectionArrowImage from '../../assets/img/collapsedSectionArrow.png';
import expandedSectionArrowImage from '../../assets/img/expandedSectionArrow.png';

export default class InterfaceEditorInspectorTreeNavigatorElement extends Component {
  static propTypes = {
    children: PropTypes.any,
    imageSource: Image.propTypes.source,
    isCollapsed: PropTypes.bool,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    onPressEdit: PropTypes.func.isRequired,
    onPressToggleCollapsed: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

  renderToggleCollapsedButton() {
    const {
      children,
      isCollapsed,
      onPressToggleCollapsed,
    } = this.props;
    const imageSource = isCollapsed
      ? collapsedSectionArrowImage
      : expandedSectionArrowImage;
    const imageStyle = [
      styles.toggleCollapsedButtonImage,
      (isCollapsed ? styles.toggleCollapsedButtonImageCollapsed : {}),
    ];

    if (!children) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={onPressToggleCollapsed}
        style={styles.toggleCollapsedButton}
      >
        <Image source={imageSource} style={imageStyle}/>
      </TouchableOpacity>
    );
  }

  renderHeaderSection() {
    const {
      imageSource,
      isSelected,
      onPress,
      title,
    } = this.props;
    const style = [
      styles.headerSection,
      (isSelected ? styles.headerSectionSelected : {}),
    ];

    return (
      <View style={style}>
        {this.renderToggleCollapsedButton()}
        <TouchableOpacity
          onPress={onPress}
          style={styles.handle}
        >
          <Image source={imageSource} style={styles.elementTypeImage}/>
          <Text style={styles.titleLabel}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderContentSection() {
    const {
      children,
      isCollapsed,
    } = this.props;
    const sectionStyle = [
      styles.contentSection,
      ((isCollapsed || !children) ? styles.contentSectionCollapsed : {}),
    ];

    return (
      <View style={sectionStyle}>
        {isCollapsed ? null : children}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderSection()}
        {this.renderContentSection()}
      </View>
    );
  }
}
