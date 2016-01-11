import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import { map, omit } from 'underscore';
import { elementPropType } from '../../../../constants/propTypes';
import addButtonImage from '../../../../assets/img/addButton.png';
import Child from './Child';
import Prop from './Prop';
import styles from './styles';

export default class Element extends Component {
  static propTypes = {
    element: elementPropType.isRequired,
    onPressAddChild: PropTypes.func.isRequired,
    onPressAddProp: PropTypes.func.isRequired,
    onPressChild: PropTypes.func.isRequired,
    onPressProp: PropTypes.func.isRequired,
  }

  renderPropsSection() {
    const {
      element,
      onPressAddProp,
      onPressProp,
    } = this.props;
    const elementProps = element.props || {};
    const elementPropsWithoutChildren = omit(elementProps, 'children');

    return (
      <View style={styles.propsSection}>
        <Text style={styles.propsSectionLabel}>
          Props
        </Text>
        <View style={styles.propsListSection}>
          {map(elementPropsWithoutChildren, (propValue, propName) => (
            <TouchableOpacity onPress={() => onPressProp(propName)}>
              <Prop key={propName} name={propName} value={propValue}/>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => onPressAddProp()} style={styles.addPropButton}>
          <Image source={addButtonImage} style={styles.addPropButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  renderChildrenSection() {
    const {
      element,
      onPressAddChild,
      onPressChild,
    } = this.props;
    const elementProps = element.props || {};
    const elementChildren = elementProps.children;

    return (
      <View style={styles.childrenSection}>
        <Text style={styles.childrenSectionLabel}>
          Children
        </Text>
        <View style={styles.childrenListSection}>
          {map(elementChildren, (childElement, childIndex) => (
            <TouchableOpacity onPress={() => onPressChild(childIndex)} style={styles.childButton}>
              <Child key={childIndex} element={childElement}/>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => onPressAddChild()} style={styles.addChildButton}>
          <Image source={addButtonImage} style={styles.addChildButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPropsSection()}
        {this.renderChildrenSection()}
      </View>
    );
  }
}
