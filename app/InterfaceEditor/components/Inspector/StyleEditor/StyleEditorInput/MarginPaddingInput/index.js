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

  renderMarginColumn() {
    return (
      <View style={[styles.contentColumn, styles.marginColumn]}>
        <View style={styles.value}>
          <Text style={styles.valueLabel}>
            30
          </Text>
        </View>
        <View style={styles.contentRow}>
          <View style={styles.value}>
            <Text style={styles.valueLabel}>
              30
            </Text>
          </View>
          <View style={styles.contentColumn}>
            <TouchableOpacity style={[styles.button, styles.marginTopButton]}>
              <Image source={marginTopImage} style={styles.marginTopButtonImage}/>
            </TouchableOpacity>
            <View style={[styles.contentRow, { marginTop: -30 }]}>
              <TouchableOpacity style={[styles.button, styles.marginLeftButton]}>
                <Image source={marginLeftImage} style={styles.marginLeftButtonImage}/>
              </TouchableOpacity>
              {this.renderPaddingColumn()}
              <TouchableOpacity style={[styles.button, styles.marginRightButton]}>
                <Image source={marginRightImage} style={styles.marginRightButtonImage}/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.button, styles.marginBottomButton]}>
              <Image source={marginBottomImage} style={styles.marginBottomButtonImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.value}>
            <Text style={styles.valueLabel}>
              30
            </Text>
          </View>
        </View>
        <View style={styles.value}>
          <Text style={styles.valueLabel}>
            30
          </Text>
        </View>
      </View>
    );
  }

  renderPaddingColumn() {
    return (
      <View style={[styles.contentColumn, styles.paddingColumn]}>
        <TouchableOpacity style={[styles.button, styles.paddingTopButton]}>
          <Image source={paddingTopImage} style={styles.paddingTopButtonImage}/>
        </TouchableOpacity>
        <View style={styles.contentRow}>
          <TouchableOpacity style={[styles.button, styles.paddingLeftButton]}>
            <Image source={paddingLeftImage} style={styles.paddingLeftButtonImage}/>
          </TouchableOpacity>
          <View style={[styles.contentColumn, { marginTop: -28 }]}>
            <View style={styles.value}>
              <Text style={styles.valueLabel}>
                30
              </Text>
            </View>
            <View style={styles.contentRow}>
              <View style={styles.value}>
                <Text style={styles.valueLabel}>
                  30
                </Text>
              </View>
              <View style={styles.contentColumn}/>
              <View style={styles.value}>
                <Text style={styles.valueLabel}>
                  30
                </Text>
              </View>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueLabel}>
                30
              </Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.button, styles.paddingRightButton]}>
            <Image source={paddingRightImage} style={styles.paddingRightButtonImage}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button, styles.paddingBottomButton]}>
          <Image source={paddingBottomImage} style={styles.paddingBottomButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMarginColumn()}
      </View>
    );
  }
}
