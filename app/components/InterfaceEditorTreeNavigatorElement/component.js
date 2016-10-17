import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

// (Image assets)
import collapsedSectionArrowImage from '../../assets/img/collapsedSectionArrow.png';
import expandedSectionArrowImage from '../../assets/img/expandedSectionArrow.png';

export default class InterfaceEditorTreeNavigatorElement extends Component {
  static propTypes = {
    children: PropTypes.any,
    imageSource: Image.propTypes.source,
    isInitiallyCollapsed: PropTypes.bool,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isInitiallyCollapsed: true,
  }

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: props.isInitiallyCollapsed,
    };
  }

  renderToggleCollapsedButton() {
    const {
      children,
    } = this.props;
    const { isCollapsed } = this.state;
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
        onPress={() => this.setState({ isCollapsed: !isCollapsed })}
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
    } = this.props;
    const { isCollapsed } = this.state;
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
