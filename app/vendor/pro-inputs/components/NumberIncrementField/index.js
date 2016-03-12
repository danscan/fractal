import React, { Component, Image, PropTypes, Text, TextInput, TouchableOpacity, View } from 'react-native';
import incrementButtonImage from '../../assets/img/incrementButton.png';
import decrementButtonImage from '../../assets/img/decrementButton.png';
import styles from './styles';

export default class NumberIncrementField extends Component {
  static propTypes = {
    incrementBy: PropTypes.number.isRequired,
    name: PropTypes.string,
    onChangeValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    unit: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
    incrementBy: 1,
    onChangeValue: () => {},
  };

  incrementValue(increment = 1) {
    const {
      incrementBy,
      onChangeValue,
      value = 0,
    } = this.props;
    const newValue = value + (increment * incrementBy);

    return onChangeValue(newValue);
  }

  renderName() {
    const { name } = this.props;

    if (!name) {
      return null;
    }

    return (
      <View style={styles.nameSection}>
        <Text style={styles.nameLabel}>
          {name}
        </Text>
      </View>
    );
  }

  renderValue() {
    const {
      onChangeValue,
      placeholder,
      unit,
      value,
    } = this.props;
    const stringValue = typeof value !== 'undefined'
                      ? String(value)
                      : null;

    return (
      <View style={styles.value}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          keyboardAppearance="dark"
          keyboardType="numeric"
          onChangeText={(valueText) => onChangeValue(Number(valueText))}
          placeholder={placeholder}
          placeholderTextColor="hsla(0,0,100,0.3)"
          value={stringValue}
          style={styles.valueInput}
        />
        <View style={styles.unit}>
          <Text style={styles.unitLabel}>
            {unit}
          </Text>
        </View>
      </View>
    );
  }

  renderButtons() {
    return (
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => this.incrementValue(-1)} style={styles.decrementButton}>
          <Image source={decrementButtonImage} style={styles.decrementButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.incrementValue()} style={styles.incrementButton}>
          <Image source={incrementButtonImage} style={styles.incrementButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderName()}
        <View style={styles.fieldSection}>
          {this.renderValue()}
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}
