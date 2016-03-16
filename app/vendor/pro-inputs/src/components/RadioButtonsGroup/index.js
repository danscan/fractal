import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default class RadioButtonsGroup extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChangeSelectedValue: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.element,
      text: PropTypes.string,
      value: PropTypes.any,
    })),
    selectedValue: PropTypes.any,
    style: View.propTypes.style,
  };

  static defaultProps = {
    onChangeSelectedValue: () => {},
  };

  renderName() {
    const { name } = this.props;

    if (!name) {
      return null;
    }

    return (
      <View style={styles.name}>
        <Text style={styles.nameLabel}>
          {name}
        </Text>
      </View>
    );
  }

  renderButtonsGroup() {
    const { items } = this.props;

    return (
      <View style={styles.buttonsGroupSection}>
        {items.map((item, itemIndex) => this.renderItemButton(item, {
          isFirstItem: itemIndex === 0,
          isLastItem: itemIndex === items.length - 1,
        }))}
      </View>
    );
  }

  renderItemButton({ image, text, value }, { isFirstItem, isLastItem }) {
    const {
      onChangeSelectedValue,
      selectedValue,
    } = this.props;
    const isSelected = selectedValue === value;
    const buttonStyle = [
      styles.itemButton,
      (isSelected ? styles.itemButtonSelected : {}),
      (isFirstItem ? styles.firstItemButton : {}),
      (isLastItem ? styles.lastItemButton : {}),
    ];
    const buttonContents = text
                          ? (<Text style={styles.buttonText}>{text}</Text>)
                          : image;

    return (
      <TouchableOpacity key={value} onPress={() => onChangeSelectedValue(value)} style={buttonStyle}>
        {buttonContents}
      </TouchableOpacity>
    );
  }

  render() {
    const { style } = this.props;

    return (
      <View style={[styles.container, style]}>
        {this.renderName()}
        {this.renderButtonsGroup()}
      </View>
    );
  }
}
