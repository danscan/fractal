import React, { Component, PropTypes, Text, View } from 'react-native';
import Prop from './Prop';
import { map } from 'underscore';
import styles from './styles';

export default class Element extends Component {
  static propTypes = {
    children: PropTypes.any,
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

  render() {
    return (
      <View style={styles.container}>
        {this.renderHandleSection()}
        {this.renderPropsSection()}
        {this.renderChildrenSection()}
      </View>
    );
  }
}
