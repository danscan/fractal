import React, { Component, PropTypes, View } from 'react-native';
import styles from './styles';
import Item from './Item';

export default class TabBarScreen extends Component {
  static propTypes = {
    children: View.propTypes.children,
    items: PropTypes.arrayOf(Item.propTypes).isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedItemIndex: PropTypes.number.isRequired,
    sceneStyle: View.propTypes.style,
    style: View.propTypes.style,
    tabBarStyle: View.propTypes.style,
  }

  static defaultProps = {
    items: [],
    onSelect: () => {},
    selectedItemIndex: 0,
  }

  renderItem(itemProps, index) {
    const {
      selectedItemIndex,
    } = this.props;

    const onSelect = itemProps.onSelect || this.props.onSelect;

    return (
      <Item
        key={`item${index}`}
        {...itemProps}
        onSelect={() => onSelect(index)}
        selected={selectedItemIndex === index}
      />
    );
  }

  renderTabBar() {
    const {
      items,
      tabBarStyle,
    } = this.props;

    return (
      <View style={[styles.tabBar, tabBarStyle]}>
        {items.map((itemProps, index) => this.renderItem(itemProps, index))}
      </View>
    );
  }

  renderScene() {
    const {
      children,
      sceneStyle,
    } = this.props;

    return (
      <View style={[styles.scene, sceneStyle]}>
        {children}
      </View>
    );
  }

  render() {
    const {
      style,
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        {this.renderScene()}
        {this.renderTabBar()}
      </View>
    );
  }
}
