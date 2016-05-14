import React, {
  AlertIOS,
  Component,
  Image,
  PropTypes,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { OrderedMap } from 'immutable';
import {
  elementPathPropType,
  elementPropPropType,
} from '../../constants/propTypes';
import {
  propValueInputTypeDisplayNamesByPropValueInputType,
} from '../../constants/propValueInputTypes';
import propValueInputTypeByProp from '../../utils/propValueInputTypeByProp';
import InterfaceEditorPropsEditorProp from '../InterfaceEditorPropsEditorProp';
import styles from './styles';

// (Button image assets)
import addButtonImage from '../../assets/img/addButton.png';
import deleteButtonImage from '../../assets/img/deleteButton.png';
import duplicateButtonImage from '../../assets/img/duplicateButton.png';

export default class InterfaceEditorPropsEditor extends Component {
  static propTypes = {
    onChangePropValue: PropTypes.func.isRequired,
    onPressAddProp: PropTypes.func.isRequired,
    onPressDeleteProp: PropTypes.func.isRequired,
    onPressDuplicateProp: PropTypes.func.isRequired,
    onPressProp: PropTypes.func.isRequired,
    props: PropTypes.objectOf(PropTypes.any),
    propTypes: PropTypes.objectOf(PropTypes.any),
    selectedElementPath: elementPathPropType,
    selectedPropName: PropTypes.string,
    selectedProp: elementPropPropType,
  };

  promptToAddProp() {
    const {
      onPressAddProp,
      selectedElementPath,
    } = this.props;

    return AlertIOS.prompt(
      'Enter New Prop Name',
      'Enter a name for the new prop:',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled promptToAddProp...'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (propName) => onPressAddProp(selectedElementPath, propName),
        },
      ],
    );
  }

  promptToDuplicateProp(propName) {
    const {
      onPressDuplicateProp,
      selectedElementPath,
    } = this.props;

    return AlertIOS.prompt(
      'Enter New Prop Name',
      'Enter a name for the new prop:',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled promptToDuplicateProp...'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (newPropName) => onPressDuplicateProp(selectedElementPath, propName, newPropName),
        },
      ],
    );
  }

  renderPropsList() {
    const { props } = this.props;
    const propsMap = new OrderedMap(props).delete('children');

    if (!props) {
      return null;
    }

    return (
      <ScrollView style={styles.propsList}>
        {propsMap.map((prop, propName) => this.renderPropListProp(prop, propName)).toArray()}
      </ScrollView>
    );
  }

  renderPropListProp(prop, propName) {
    const {
      onChangePropValue,
      onPressProp,
      selectedElementPath,
      selectedPropName,
    } = this.props;
    const isSelectedProp = propName === selectedPropName;

    return (
      <InterfaceEditorPropsEditorProp
        key={propName}
        isSelected={isSelectedProp}
        onChangeValue={(newPropValue) => onChangePropValue(selectedElementPath, selectedPropName, newPropValue)}
        onPress={() => onPressProp(propName)}
        prop={prop}
        propName={propName}
      />
    );
  }

  renderSelectedPropOptions() {
    const {
      selectedProp,
      selectedPropName,
    } = this.props;

    // If no prop is selected, don't render any options UI for it
    if (!selectedPropName) {
      return null;
    }

    const selectedPropValueInputType = propValueInputTypeByProp(selectedProp);
    const selectedPropValueInputTypeDisplayName = propValueInputTypeDisplayNamesByPropValueInputType.get(selectedPropValueInputType);

    return (
      <View style={styles.selectedPropOptions}>
        <View style={styles.selectedPropOptionsRow}>
          <TouchableOpacity
            onPress={() => console.log('Change input type for prop:', selectedPropName)}
            style={styles.selectedPropOptionsColumn}
          >
            <Text style={styles.selectedPropOptionLabel}>
              Input Type
            </Text>
            <Text style={styles.selectedPropOptionValueLabel}>
              {selectedPropValueInputTypeDisplayName}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderPropsActionsSection() {
    const {
      onPressDeleteProp,
      selectedElementPath,
      selectedPropName,
    } = this.props;

    return (
      <View style={styles.propsActionsSection}>
        <TouchableOpacity onPress={() => this.promptToAddProp()} style={styles.propsActionButton}>
          <Image source={addButtonImage} style={[styles.propsActionButtonImage, styles.propsAddActionButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.promptToDuplicateProp(selectedPropName)} style={styles.propsActionButton}>
          <Image source={duplicateButtonImage} style={styles.propsActionButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDeleteProp(selectedElementPath, selectedPropName)} style={styles.propsActionButton}>
          <Image source={deleteButtonImage} style={styles.propsActionButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPropsList()}
        {this.renderSelectedPropOptions()}
        {this.renderPropsActionsSection()}
      </View>
    );
  }
}
