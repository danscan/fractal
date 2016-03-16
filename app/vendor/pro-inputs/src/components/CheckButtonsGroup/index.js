import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import { Set } from 'immutable';
import styles from './styles';

export default class CheckButtonsGroup extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.element,
      text: PropTypes.string,
      value: PropTypes.any,
    })),
    name: PropTypes.string,
    onChangeSelectedValues: PropTypes.func.isRequired,
    selectedValues: PropTypes.arrayOf(PropTypes.any).isRequired,
    style: View.propTypes.style,
  };

  static defaultProps = {
    items: [],
    onChangeSelectedValues: () => {},
    selectedValues: [],
  };

  toggleSelectedValuesMember(value) {
    const {
      onChangeSelectedValues,
      selectedValues,
    } = this.props;
    const selectedValuesSet = new Set(selectedValues);
    let newSelectedValues;

    if (selectedValuesSet.has(value)) {
      newSelectedValues = selectedValuesSet
        .delete(value)
        .toArray();
    } else {
      newSelectedValues = selectedValuesSet
        .add(value)
        .toArray();
    }

    return onChangeSelectedValues(newSelectedValues);
  }

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
    const { selectedValues } = this.props;
    const selectedValuesSet = new Set(selectedValues);
    const isSelected = selectedValuesSet.has(value);
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
      <TouchableOpacity
        key={value}
        onPress={() => this.toggleSelectedValuesMember(value)}
        style={buttonStyle}
      >
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
