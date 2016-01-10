import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import Prop from './Prop';
import { map } from 'underscore';
import styles from './styles';

export default class Element extends Component {
  static propTypes = {
    children: PropTypes.any,
    expanded: PropTypes.bool,
    type: PropTypes.func.isRequired,
    props: PropTypes.object,
  }

  renderHandleSection() {
    const { type } = this.props;

    return (
      <View style={styles.handleSection}>
        <Text style={styles.typeLabel}>
          {type.displayName}
        </Text>
      </View>
    );
  }

  renderChildrenSection() {
    const { children } = this.props;

    if (typeof children === 'string') {
      return (
        <Text style={styles.childrenValueLabel}>
          {children}
        </Text>
      );
    }

    return (
      <View style={styles.childrenSection}>
        {children}
      </View>
    );
  }

  renderPropsSection() {
    const { props } = this.props;

    // Don't render props section if node has no props
    if (!props) {
      return null;
    }

    return (
      <View style={styles.propsSection}>
        {map(props, (propValue, propName) => <Prop key={propName} name={propName} value={propValue}/>)}
      </View>
    );
  }

  renderExpandedChildrenSection() {
    const { children } = this.props;

    if (typeof children === 'string') {
      return (
        <Text style={styles.childrenValueLabel}>
          {children}
        </Text>
      );
    }

    return (
      <View style={styles.childrenSection}>
        {children}
      </View>
    );
  }

  renderExpandedContentSection() {
    return (
      <View style={styles.expandedContent}>
        {this.renderPropsSection()}
        {this.renderExpandedChildrenSection()}
      </View>
    );
  }

  render() {
    const { expanded } = this.props;

    return (
      <TouchableOpacity onPress={() => console.log('select (should expand)...')} style={styles.container}>
        {this.renderHandleSection()}
        {expanded ? this.renderExpandedContentSection() : this.renderChildrenSection()}
      </TouchableOpacity>
    );
  }
}
