import React, { Component, PropTypes } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import collapsedSectionArrowImage from '../../assets/img/collapsedSectionArrow.png';
import expandedSectionArrowImage from '../../assets/img/expandedSectionArrow.png';
import styles from './styles';

// (Prop type constants)
const menuItemPropType = PropTypes.shape({
  element: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
});

export default class CollapsibleListSection extends Component {
  static propTypes = {
    children: PropTypes.any,
    headerSectionStyle: View.propTypes.style,
    initiallyExpanded: PropTypes.bool,
    menuItems: PropTypes.arrayOf(menuItemPropType).isRequired,
    onPress: PropTypes.func,
    title: PropTypes.string.isRequired,
    titleLabelStyle: Text.propTypes.style,
  };

  static defaultProps = {
    initiallyExpanded: true,
    menuItems: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      expanded: props.initiallyExpanded,
    };
  }

  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  renderHeaderSection() {
    const {
      headerSectionStyle,
      onPress,
      title,
      titleLabelStyle,
    } = this.props;
    // If an `onPress` prop was passed, it should be invoked on headerSection
    // press (only pressing the arrow will toggle expanded). Else, headerSection
    // press will toggle expanded.
    const onPressHeaderSection = onPress
      ? onPress
      : () => this.toggleExpanded();
    const arrow = onPress
      ? (
        <TouchableOpacity
          onPress={() => this.toggleExpanded()}
          style={styles.arrow}
        >
          {this.renderArrowImage()}
        </TouchableOpacity>
      )
      : (
        <View style={styles.arrow}>
          {this.renderArrowImage()}
        </View>
      );

    return (
      <TouchableOpacity
        onPress={onPressHeaderSection}
        style={[styles.headerSection, headerSectionStyle]}
      >
        {arrow}
        <View style={styles.title}>
          <Text style={[styles.titleLabel, titleLabelStyle]}>
            {title}
          </Text>
        </View>
        {this.renderMenuItems()}
      </TouchableOpacity>
    );
  }

  renderArrowImage() {
    const { expanded } = this.state;

    if (expanded) {
      return (
        <Image
          key="expandedSectionArrow"
          source={expandedSectionArrowImage}
          style={styles.expandedSectionArrowImage}
        />
      );
    }

    return (
      <Image
        key="collapsedSectionArrow"
        source={collapsedSectionArrowImage}
        style={styles.collapsedSectionArrowImage}
      />
    );
  }

  renderMenuItems() {
    const { menuItems } = this.props;

    return (
      <View style={styles.menuItems}>
        {menuItems.map((menuItem, index) => (
          <TouchableOpacity key={index} onPress={menuItem.onPress}>
            {menuItem.element}
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  renderChildrenSection() {
    const { children } = this.props;
    const { expanded } = this.state;

    // If section isn't expanded or it doesn't have children, don't render children
    if (!expanded || !children) {
      return null;
    }

    return (
      <View style={styles.childrenSection}>
        {children}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderSection()}
        {this.renderChildrenSection()}
      </View>
    );
  }
}
