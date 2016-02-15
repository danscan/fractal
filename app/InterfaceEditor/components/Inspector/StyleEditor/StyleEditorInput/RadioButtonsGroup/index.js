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
        {options.map(option => this.renderOptionButton(option))}
      </View>
    );
  }

  renderOptionButton({ image, text, propValue }) {
    const {
      onChangeValue,
      value: selectedValue,
    } = this.props;
    const selected = selectedValue === propValue;
    const buttonStyle = selected
                      ? [styles.optionButton, styles.optionButtonSelected]
                      : styles.optionButton;
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
