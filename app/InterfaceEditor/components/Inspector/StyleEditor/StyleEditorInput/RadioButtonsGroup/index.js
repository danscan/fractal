import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default class RadioButtonsGroup extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChangeValue: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.element,
      text: PropTypes.string,
      value: PropTypes.any,
    })),
    style: View.propTypes.style,
    value: PropTypes.any,
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
    const { options } = this.props;

    return (
      <View style={styles.buttonsGroupSection}>
        {options.map((option, optionIndex) => this.renderOptionButton(option, {
          isFirstOption: optionIndex === 0,
          isLastOption: optionIndex === options.length - 1,
        }))}
      </View>
    );
  }

  renderOptionButton({ image, text, propValue }, { isFirstOption, isLastOption }) {
    const {
      onChangeValue,
      value: selectedValue,
    } = this.props;
    const selected = selectedValue === propValue;
    const buttonStyle = [
      styles.optionButton,
      (selected ? styles.optionButtonSelected : {}),
      (isFirstOption ? styles.firstOptionButton : {}),
      (isLastOption ? styles.lastOptionButton : {}),
    ];
    const buttonContents = text
                          ? (<Text style={styles.buttonText}>{text}</Text>)
                          : image;

    return (
      <TouchableOpacity key={propValue} onPress={() => onChangeValue(propValue)} style={buttonStyle}>
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
