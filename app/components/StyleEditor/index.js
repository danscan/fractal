import React, { Component, PropTypes, ScrollView, View } from 'react-native';
// import beginFullScreenPreviewButtonImage from '../../assets/img/beginFullScreenPreviewButton.png';
// import redoButtonImage from '../../assets/img/redoButton.png';
// import undoButtonImage from '../../assets/img/undoButton.png';
import IncrementField from './IncrementField';
import Section from './Section';
import styles from './styles';

export default class StyleEditor extends Component {
  static propTypes = {
    onValueChange: PropTypes.func.isRequired,
    propType: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Section title="Position & Content">
          <IncrementField
            name="Flex Grow"
            onChangeValue={(value) => console.log('onChangeValue... value:', value)}
            placeholder="--"
            unit="px"
            value={1}
          />
        </Section>
        <Section title="Appearance"/>
        <Section title="Border"/>
        <Section title="Shadow"/>
        <Section title="Transforms"/>
        <Section title="Image"/>
        <Section title="Text"/>
      </ScrollView>
    );
  }
}
