import React, { Component, Image, PropTypes, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { debounce } from 'underscore';
import collapsedSectionArrowImage from '../../../../assets/img/collapsedSectionArrow.png';
import expandedSectionArrowImage from '../../../../assets/img/expandedSectionArrow.png';
import deleteButtonImage from '../../../../assets/img/deleteButton.png';
import { elementPathPropType, propInputTypePropType } from '../../../../constants/propTypes';
import styles from './styles';

export default class PropsEditorSection extends Component {
  static propTypes = {
    elementPath: elementPathPropType.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onChangePropValue: PropTypes.func.isRequired,
    onPressDelete: PropTypes.func.isRequired,
    onPressPropInputType: PropTypes.func.isRequired,
    onPressToggleExpanded: PropTypes.func.isRequired,
    propInputType: propInputTypePropType.isRequired,
    propName: PropTypes.string.isRequired,
    propValue: PropTypes.any,
  };

  static defaultProps = {
    isExpanded: false,
    propInputType: 'Object',
  };

  constructor(...args) {
    super(...args);

    const [props] = args;

    this.state = {
      propValueString: this.getPropValueString(props.propValue),
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextPropValueString = this.getPropValueString(nextProps.propValue);

    if (nextPropValueString !== this.state.propValueString) {
      this.setState({
        propValueString: nextPropValueString,
      });
    }
  }

  getPropValueString(propValue) {
    const propValueString = typeof propValue === 'object'
                          ? JSON.stringify(propValue, null, 2)
                          : String(propValue);

    return propValueString;
  }

  handlePropValueTextChange(propValueString) {
    const { onChangePropValue } = this.props;

    this.setState({
      propValueString,
    });

    return debounce((string) => {
      try {
        const propValue = JSON.parse(string);
        return onChangePropValue(propValue);
      } catch (error) {
        console.log('JSON.parse error:', error);
      }
    }, 300)(propValueString);
  }

  renderHeaderSection() {
    const {
      isExpanded,
      onPressDelete,
      onPressToggleExpanded,
      propName,
    } = this.props;

    return (
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => onPressToggleExpanded(!isExpanded)} style={styles.headerButton}>
          <View style={styles.arrow}>
            {this.renderArrowImage()}
          </View>
          <View style={styles.propName}>
            <Text style={styles.propNameLabel}>
              {propName}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDelete()} style={styles.deleteButton}>
          <Image source={deleteButtonImage} style={styles.deleteButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  renderArrowImage() {
    const { isExpanded } = this.props;

    if (isExpanded) {
      return (
        <Image
          key="expandedSectionArrow"
          source={expandedSectionArrowImage}
          style={styles.expandedSectionArrowImage}
        />
      );
    }

    return (
      <Image
        key="collapsedSectionArrow"
        source={collapsedSectionArrowImage}
        style={styles.collapsedSectionArrowImage}
      />
    );
  }

  renderInputsSection() {
    const {
      isExpanded,
      // propInputType,
    } = this.props;

    // If section isn't expanded, don't render children
    if (!isExpanded) {
      return null;
    }

    return (
      <View style={styles.inputsSection}>
        {/* TODO: Create picker for propInputType... <Text>{propInputType}</Text> */}
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="dark"
          multiline
          onChangeText={(text) => debounce(this.handlePropValueTextChange.bind(this), 300)(text)}
          placeholder="Prop value"
          placeholderTextColor="#ccc"
          value={this.state.propValueString}
          style={styles.propValueInput}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderSection()}
        {this.renderInputsSection()}
      </View>
    );
  }
}
