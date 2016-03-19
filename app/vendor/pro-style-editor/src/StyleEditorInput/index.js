import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CollapsibleListSection from '../CollapsibleListSection';
import PositionAndContentSection from '../PositionAndContentSection';
import AppearanceSection from '../AppearanceSection';
import BorderSection from '../BorderSection';
import ShadowSection from '../ShadowSection';
import ImageSection from '../ImageSection';
import TypographySection from '../TypographySection';
import styles from './styles';

export default class StyleEditorInput extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    return (
      <View style={styles.continer}>
        <CollapsibleListSection title="Position & Content">
          <PositionAndContentSection {...this.props}/>
        </CollapsibleListSection>
        <CollapsibleListSection title="Appearance">
          <AppearanceSection {...this.props}/>
        </CollapsibleListSection>
        <CollapsibleListSection title="Border">
          <BorderSection {...this.props}/>
        </CollapsibleListSection>
        <CollapsibleListSection title="Shadow">
          <ShadowSection {...this.props}/>
        </CollapsibleListSection>
        {/* <CollapsibleListSection title="Transforms"/> */}
        <CollapsibleListSection title="Image">
          <ImageSection {...this.props}/>
        </CollapsibleListSection>
        <CollapsibleListSection title="Typography">
          <TypographySection {...this.props}/>
        </CollapsibleListSection>
      </View>
    );
  }
}
