import React, { Component, Image, PropTypes, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';


export default class Item extends Component {
  static propTypes = {
    iconSource: Image.propTypes.source,
    label: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    selectedTintColor: PropTypes.string,
    selectedTextColor: PropTypes.string,
    textColor: PropTypes.string,
    tintColor: PropTypes.string,
  }

  static defaultProps = {
    onSelect: () => {},
    selected: false,
    tintColor: '#aaa',
    selectedTintColor: undefined,
    textColor: '#aaa',
    selectedTextColor: '#00b5ec',
  }

  getTintColor() {
    const {
      selected,
      tintColor,
      selectedTintColor,
    } = this.props;

    return !selected
            ? tintColor
            : selectedTintColor;
  }

  getTextColor() {
    const {
      selected,
      textColor,
      selectedTextColor,
    } = this.props;

    return !selected
            ? textColor
            : selectedTextColor;
  }

  getStyles() {
    const tintColor = this.getTintColor();
    const textColor = this.getTextColor();

    return styles({ tintColor, textColor });
  }

  renderIcon() {
    const {
      iconSource,
    } = this.props;

    // If there's no icon source, don't render an icon
    if (!iconSource) {
      return null;
    }

    return (
      <Image
        source={iconSource}
        resizeMode={Image.resizeMode.cover}
        style={this.getStyles().icon}
      />
    );
  }

  renderlabel() {
    const {
      label,
    } = this.props;

    return (
      <Text style={this.getStyles().label}>
        {label}
      </Text>
    );
  }

  render() {
    const {
      onSelect,
    } = this.props;

    return (
      <TouchableWithoutFeedback delayPressIn={0} onPressIn={() => onSelect()}>
        <View style={this.getStyles().container}>
          {this.renderIcon()}
          {this.renderlabel()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
