import React, { Component, Image, PropTypes, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { OrderedMap } from 'immutable';
import { elementPathPropType } from '../../constants/propTypes';
import CollapsibleListSection from '../CollapsibleListSection';
import styles from './styles';

// (Button image assets)
import deleteButtonImage from '../../assets/img/deleteButton.png';
import duplicateButtonImage from '../../assets/img/duplicateButton.png';

export default class InterfaceEditorPropsEditor extends Component {
  static propTypes = {
    onPressDeleteProp: PropTypes.func.isRequired,
    onPressDuplicateProp: PropTypes.func.isRequired,
    onPressProp: PropTypes.func.isRequired,
    props: PropTypes.object,
    propTypes: PropTypes.object,
    selectedElementPath: elementPathPropType,
    selectedProp: PropTypes.string,
  };

  renderPropsList() {
    const { props } = this.props;
    const propsMap = new OrderedMap(props).delete('children');

    if (!props) {
      return null;
    }

    return (
      <ScrollView style={styles.propsList}>
        {propsMap.map((propValue, propName) => this.renderPropListProp(propValue, propName)).toArray()}
      </ScrollView>
    );
  }

  renderPropListProp(propValue, propName) {
    const {
      onPressProp,
      selectedProp,
    } = this.props;
    const isSelectedProp = propName === selectedProp;
    const propHeaderSectionStyle = isSelectedProp
      ? styles.selectedPropHeaderSection
      : null;
    const propTitleLabelStyle = isSelectedProp
      ? styles.selectedPropTitleLabel
      : null;

    return (
      <CollapsibleListSection
        key={propName}
        headerSectionStyle={propHeaderSectionStyle}
        menuItems={[
          {
            element: <Text style={{ color: 'white', padding: 9 }}>X</Text>,
            onPress: () => console.log('Delete prop... propName:', propName),
          },
        ]}
        onPress={() => onPressProp(propName)}
        title={propName}
        titleLabelStyle={propTitleLabelStyle}
      >
        <Text>{propValue}</Text>
      </CollapsibleListSection>
    );
  }

  renderSelectedPropOptions() {
    const {
      onPressDeleteProp,
      onPressDuplicateProp,
      selectedElementPath,
      selectedProp,
    } = this.props;

    // If no prop is selected, don't render any options UI for it
    if (!selectedProp) {
      return null;
    }

    return (
      <View style={styles.selectedPropOptions}>
        <View style={styles.selectedPropOptionsRow}>
          <TouchableOpacity
            onPress={() => console.log('Change input type for prop:', selectedProp)}
            style={styles.selectedPropOptionsColumn}
          >
            <Text style={styles.selectedPropOptionLabel}>
              Input Type
            </Text>
            <Text style={styles.selectedPropOptionValueLabel}>
              Literal
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectedPropActionsSection}>
          <TouchableOpacity onPress={() => onPressDuplicateProp(selectedElementPath, selectedProp)} style={styles.selectedPropActionButton}>
            <Image source={duplicateButtonImage} style={styles.selectedPropActionButtonImage}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressDeleteProp(selectedElementPath, selectedProp)} style={styles.selectedPropActionButton}>
            <Image source={deleteButtonImage} style={styles.selectedPropActionButtonImage}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPropsList()}
        {this.renderSelectedPropOptions()}
      </View>
    );
  }
}
