import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
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

  renderMarginValueLabels() {
    return (
      <View style={styles.marginValueLabels}>
        <View style={styles.contentRow}>
          <Text style={[styles.valueLabel, styles.marginTopValueLabel]}>
            30
          </Text>
        </View>
        <View style={styles.contentRow}>
          <View style={styles.contentColumn}>
            <Text style={[styles.valueLabel, styles.marginLeftValueLabel]}>
              30
            </Text>
          </View>
          <View style={styles.contentColumn}>
            {this.renderControls()}
          </View>
          <View style={styles.contentColumn}>
            <Text style={[styles.valueLabel, styles.marginRightValueLabel]}>
              30
            </Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Text style={[styles.valueLabel, styles.marginBottomValueLabel]}>
            30
          </Text>
        </View>
      </View>
    );
  }

  renderControls() {
    return (
      <View style={styles.controls}>
        <TouchableOpacity style={[styles.button, styles.marginTopButton]}>
          <Image source={marginTopImage} style={[styles.buttonImage, styles.marginTopButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.marginRightButton]}>
          <Image source={marginRightImage} style={[styles.buttonImage, styles.marginRightButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.marginBottomButton]}>
          <Image source={marginBottomImage} style={[styles.buttonImage, styles.marginBottomButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.marginLeftButton]}>
          <Image source={marginLeftImage} style={[styles.buttonImage, styles.marginLeftButtonImage]}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.paddingTopButton]}>
          <Image source={paddingTopImage} style={[styles.buttonImage, styles.paddingTopButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.paddingRightButton]}>
          <Image source={paddingRightImage} style={[styles.buttonImage, styles.paddingRightButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.paddingBottomButton]}>
          <Image source={paddingBottomImage} style={[styles.buttonImage, styles.paddingBottomButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.paddingLeftButton]}>
          <Image source={paddingLeftImage} style={[styles.buttonImage, styles.paddingLeftButtonImage]}/>
        </TouchableOpacity>

        <Text style={[styles.valueLabel, styles.paddingTopValueLabel]}>
          30
        </Text>
        <Text style={[styles.valueLabel, styles.paddingLeftValueLabel]}>
          30
        </Text>
        <Text style={[styles.valueLabel, styles.paddingRightValueLabel]}>
          30
        </Text>
        <Text style={[styles.valueLabel, styles.paddingBottomValueLabel]}>
          30
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMarginValueLabels()}
      </View>
    );
  }
}
