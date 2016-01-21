import React, { Component, Image, PropTypes, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { map, omit } from 'underscore';
import { elementPropType, treePathPropType } from '../../constants/propTypes';
import addButtonImage from '../../assets/img/addButton.png';
import Child from './Child';
import Prop from './Prop';
import styles from './styles';

export default class Element extends Component {
  static propTypes = {
    elementPath: treePathPropType.isRequired,
    element: PropTypes.oneOfType([
      elementPropType,
      PropTypes.string,
    ]).isRequired,
    onPressAddChild: PropTypes.func.isRequired,
    onPressAddProp: PropTypes.func.isRequired,
    onPressChild: PropTypes.func.isRequired,
    onPressProp: PropTypes.func.isRequired,
  }

  renderPropsSection() {
    const {
      element,
      elementPath,
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
            <TouchableOpacity key={propName} onPress={() => onPressProp(elementPath, propName, element.props[propName])}>
              <Prop key={propName} name={propName} value={propValue}/>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => onPressAddProp(elementPath)} style={styles.addPropButton}>
          <Image source={addButtonImage} style={styles.addPropButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  renderChildrenSection() {
    const {
      element,
      elementPath,
      onPressAddChild,
      onPressChild,
    } = this.props;
    const elementProps = element.props || {};
    const elementChildren = elementProps.children;

    if (element.type === Text) {
      return this.renderTextChildrenSection();
    }

    return (
      <View style={styles.childrenSection}>
        <Text style={styles.childrenSectionLabel}>
          Children
        </Text>
        <View style={styles.childrenListSection}>
          {map(elementChildren, (childElement, childIndex) => (
            <TouchableOpacity key={childIndex} onPress={() => onPressChild(elementPath, childIndex)} style={styles.childButton}>
              <Child key={childIndex} element={childElement}/>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => onPressAddChild(elementPath)} style={styles.addChildButton}>
          <Image source={addButtonImage} style={styles.addChildButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  renderTextChildrenSection() {
    const { element } = this.props;
    const elementProps = element.props || {};
    const elementChildren = elementProps.children;

    return (
      <View style={styles.childrenSection}>
        <Text style={styles.childrenSectionLabel}>
          Value
        </Text>
        <View style={styles.childrenListSection}>
          {map(elementChildren, (childValue, childIndex) => (
            <TextInput key={childIndex} multiline style={{ borderColor: '#94c600', borderRadius: 8, borderWidth: 1, color: '#333', fontSize: 12, fontFamily: 'Avenir', height: 100, padding: 10 }} value={childValue}/>
          ))}
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderPropsSection()}
        {this.renderChildrenSection()}
      </ScrollView>
    );
  }
}
