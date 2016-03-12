import React, { Component, Image, PropTypes, View } from 'react-native';
import { elementPathPropType } from '../../../../../constants/propTypes';
import IncrementField from '../IncrementField';
import RadioButtonsGroup from '../RadioButtonsGroup';
import Section from '../Section';
import styles from './styles';

// (Radio button images)
import radioCrossImage from '../assets/img/radioCross.png';
import radioShowImage from '../assets/img/radioShow.png';
import radioFillBucketImage from '../assets/img/radioFillBucket.png';

export default class AppearanceSection extends Component {
  static propTypes = {
    elementPath: elementPathPropType.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    propName: PropTypes.string.isRequired,
    propType: PropTypes.func.isRequired,
    propValue: PropTypes.object,
  };

  render() {
    const {
      onChangeValue,
      propValue,
    } = this.props;

    return (
      <Section title="Appearance">
        <View style={styles.wrapRow}>
          <RadioButtonsGroup
            name="Background Color"
            onChangeValue={(newValue) => onChangeValue(propValue.set('backgroundColor', newValue))}
            options={[
              { text: 'None', propValue: null },
              { text: 'White', propValue: 'white' },
              { text: 'Red', propValue: 'red' },
              { text: 'Black', propValue: 'black' },
            ]}
            value={propValue.get('backgroundColor') || null}
          />
          <RadioButtonsGroup
            name="Backface Visibility"
            onChangeValue={(newValue) => onChangeValue(propValue.set('backfaceVisibility', newValue))}
            options={[
              { image: <Image source={radioShowImage} style={{ width: 17, height: 9 }}/>, propValue: 'visible' },
              { image: <Image source={radioCrossImage} style={{ width: 12, height: 12 }}/>, propValue: 'hidden' },
            ]}
            value={propValue.get('backfaceVisibility', 'visible')}
          />
          <IncrementField
            name="Opacity"
            onChangeValue={(newValue) => onChangeValue(propValue.set('opacity', newValue))}
            placeholder="--"
            unit="%"
            value={propValue.get('opacity') || 100}
          />
        </View>
      </Section>
    );
  }
}
