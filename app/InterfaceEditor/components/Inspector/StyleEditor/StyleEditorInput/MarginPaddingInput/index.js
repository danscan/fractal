import React, { AlertIOS, Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

// (Image assets)
import marginTopImage from '../assets/img/marginTop.png';
import marginRightImage from '../assets/img/marginRight.png';
import marginBottomImage from '../assets/img/marginBottom.png';
import marginLeftImage from '../assets/img/marginLeft.png';
import paddingTopImage from '../assets/img/paddingTop.png';
import paddingRightImage from '../assets/img/paddingRight.png';
import paddingBottomImage from '../assets/img/paddingBottom.png';
import paddingLeftImage from '../assets/img/paddingLeft.png';

export default class MarginPaddingInput extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: PropTypes.any,
  };

  onChangeStylePropValue({ stylePropValue, styleProp }) {
    const {
      onChangeValue,
      value,
    } = this.props;
    const stylePropNumberValue = Number(stylePropValue);
    const newValue = value.set(styleProp, stylePropNumberValue);

    if (isNaN(stylePropNumberValue)) {
      return null;
    }

    return onChangeValue(newValue);
  }

  promptForStylePropValue(styleProp) {
    return AlertIOS.prompt(
      `Enter new ${styleProp} value`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Set Value', onPress: (stylePropValue) => this.onChangeStylePropValue({ stylePropValue, styleProp }) },
      ],
    );
  }

  renderTouchableValue({ value: stylePropValue, styleProp, labelStyle, style }) {
    return (
      <TouchableOpacity onPress={() => this.promptForStylePropValue(styleProp)} style={style}>
        <Text style={[styles.valueLabel, labelStyle]}>
          {stylePropValue}
        </Text>
      </TouchableOpacity>
    );
  }

  renderControlButton({ value: stylePropValue, styleProp, imageSource, imageStyle, style }) {
    const incrementedStylePropValue = stylePropValue + 1;

    return (
      <TouchableOpacity
        onPress={() => this.onChangeStylePropValue({ stylePropValue: incrementedStylePropValue, styleProp })}
        style={[styles.button, style]}
      >
        <Image source={imageSource} style={[styles.buttonImage, imageStyle]}/>
      </TouchableOpacity>
    );
  }

  renderMarginValues() {
    const { value } = this.props;
    const marginValue = value.get('margin', 0);
    const marginTopValue = value.get('marginTop') || marginValue;
    const marginRightValue = value.get('marginRight') || marginValue;
    const marginBottomValue = value.get('marginBottom') || marginValue;
    const marginLeftValue = value.get('marginLeft') || marginValue;

    return (
      <View style={styles.marginValues}>
        <View style={styles.contentRow}>
          {this.renderTouchableValue({
            styleProp: 'marginTop',
            value: marginTopValue,
            labelStyle: styles.marginTopValueLabel,
            style: styles.marginTopValue,
          })}
        </View>
        <View style={styles.contentRow}>
          <View style={styles.contentColumn}>
            {this.renderTouchableValue({
              styleProp: 'marginLeft',
              value: marginLeftValue,
              labelStyle: styles.marginLeftValueLabel,
              style: styles.marginLeftValue,
            })}
          </View>
          <View style={styles.contentColumn}>
            {this.renderControls()}
          </View>
          <View style={styles.contentColumn}>
            {this.renderTouchableValue({
              styleProp: 'marginRight',
              value: marginRightValue,
              labelStyle: styles.marginRightValueLabel,
              style: styles.marginRightValue,
            })}
          </View>
        </View>
        <View style={styles.contentRow}>
          {this.renderTouchableValue({
            styleProp: 'marginBottom',
            value: marginBottomValue,
            labelStyle: styles.marginBottomValueLabel,
            style: styles.marginBottomValue,
          })}
        </View>
      </View>
    );
  }

  renderControls() {
    const { value } = this.props;
    const marginValue = value.get('margin', 0);
    const marginTopValue = value.get('marginTop') || marginValue;
    const marginRightValue = value.get('marginRight') || marginValue;
    const marginBottomValue = value.get('marginBottom') || marginValue;
    const marginLeftValue = value.get('marginLeft') || marginValue;
    const paddingValue = value.get('padding', 0);
    const paddingTopValue = value.get('paddingTop') || paddingValue;
    const paddingRightValue = value.get('paddingRight') || paddingValue;
    const paddingBottomValue = value.get('paddingBottom') || paddingValue;
    const paddingLeftValue = value.get('paddingLeft') || paddingValue;

    return (
      <View style={styles.controls}>
        {this.renderControlButton({
          value: marginTopValue,
          styleProp: 'marginTop',
          imageSource: marginTopImage,
          imageStyle: styles.marginTopButtonImage,
          style: styles.marginTopButton,
        })}
        {this.renderControlButton({
          value: marginRightValue,
          styleProp: 'marginRight',
          imageSource: marginRightImage,
          imageStyle: styles.marginRightButtonImage,
          style: styles.marginRightButton,
        })}
        {this.renderControlButton({
          value: marginBottomValue,
          styleProp: 'marginBottom',
          imageSource: marginBottomImage,
          imageStyle: styles.marginBottomButtonImage,
          style: styles.marginBottomButton,
        })}
        {this.renderControlButton({
          value: marginLeftValue,
          styleProp: 'marginLeft',
          imageSource: marginLeftImage,
          imageStyle: styles.marginLeftButtonImage,
          style: styles.marginLeftButton,
        })}

        {this.renderControlButton({
          value: paddingTopValue,
          styleProp: 'paddingTop',
          imageSource: paddingTopImage,
          imageStyle: styles.paddingTopButtonImage,
          style: styles.paddingTopButton,
        })}
        {this.renderControlButton({
          value: paddingRightValue,
          styleProp: 'paddingRight',
          imageSource: paddingRightImage,
          imageStyle: styles.paddingRightButtonImage,
          style: styles.paddingRightButton,
        })}
        {this.renderControlButton({
          value: paddingBottomValue,
          styleProp: 'paddingBottom',
          imageSource: paddingBottomImage,
          imageStyle: styles.paddingBottomButtonImage,
          style: styles.paddingBottomButton,
        })}
        {this.renderControlButton({
          value: paddingLeftValue,
          styleProp: 'paddingLeft',
          imageSource: paddingLeftImage,
          imageStyle: styles.paddingLeftButtonImage,
          style: styles.paddingLeftButton,
        })}

        {this.renderTouchableValue({
          styleProp: 'paddingTop',
          value: paddingTopValue,
          labelStyle: styles.paddingTopValueLabel,
          style: styles.paddingTopValue,
        })}
        {this.renderTouchableValue({
          styleProp: 'paddingRight',
          value: paddingRightValue,
          labelStyle: styles.paddingRightValueLabel,
          style: styles.paddingRightValue,
        })}
        {this.renderTouchableValue({
          styleProp: 'paddingBottom',
          value: paddingBottomValue,
          labelStyle: styles.paddingBottomValueLabel,
          style: styles.paddingBottomValue,
        })}
        {this.renderTouchableValue({
          styleProp: 'paddingLeft',
          value: paddingLeftValue,
          labelStyle: styles.paddingLeftValueLabel,
          style: styles.paddingLeftValue,
        })}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMarginValues()}
      </View>
    );
  }
}
