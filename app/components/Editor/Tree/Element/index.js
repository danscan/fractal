import React, { Component, Image, PropTypes, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { map, omit } from 'underscore';
import { elementPropType } from '../../../../constants/propTypes';
import addButtonImage from '../../../../assets/img/addButton.png';
import Child from './Child';
import Prop from './Prop';
import styles from './styles';

export default class Element extends Component {
  static propTypes = {
    element: elementPropType.isRequired,
  }

  renderPropsSection() {
    const { element } = this.props;
    const elementProps = element.props || {};
    const elementPropsWithoutChildren = omit(elementProps, 'children');

    return (
      <View style={styles.propsSection}>
        <Text style={styles.propsSectionLabel}>
          Props
        </Text>
        <View style={styles.propsListSection}>
          {map(elementPropsWithoutChildren, (propValue, propName) => <Prop key={propName} name={propName} value={propValue}/>)}
        </View>
        <TouchableOpacity onPress={() => console.log('add prop')} style={styles.addPropButton}>
          <Image source={addButtonImage} style={styles.addPropButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  renderChildrenSection() {
    const { element } = this.props;
    const elementProps = element.props || {};
    const elementChildren = elementProps.children;

    return (
      <View style={styles.childrenSection}>
        <Text style={styles.childrenSectionLabel}>
          Children
        </Text>
        <View style={styles.childrenListSection}>
          {map(elementChildren, (childElement, childIndex) => <Child key={childIndex} element={childElement}/>)}
        </View>
        <TouchableOpacity onPress={() => console.log('add child')} style={styles.addChildButton}>
          <Image source={addButtonImage} style={styles.addChildButtonImage}/>
        </TouchableOpacity>
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
