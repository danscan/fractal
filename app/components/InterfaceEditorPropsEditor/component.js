import React, { Component, PropTypes, ScrollView, Text, View } from 'react-native';
import { OrderedMap } from 'immutable';
import CollapsibleListSection from '../CollapsibleListSection';
import styles from './styles';

export default class InterfaceEditorPropsEditor extends Component {
  static propTypes = {
    props: PropTypes.object,
    propTypes: PropTypes.object,
  };

  render() {
    const { props } = this.props;
    const propsMap = new OrderedMap(props).delete('children');

    if (!props) {
      return null;
    }

    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {propsMap.map((propValue, propName) => (
            <CollapsibleListSection
              key={propName}
              title={propName}
              menuItems={[
                {
                  element: <Text style={{ color: 'white', padding: 9 }}>X</Text>,
                  onPress: () => console.log('Delete me!'),
                },
              ]}
            >
              <Text>{propValue}</Text>
            </CollapsibleListSection>
          )).toArray()}
        </ScrollView>
      </View>
    );
  }
}
