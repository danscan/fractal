import React, { Component, Image, Picker, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import pickerIconImage from '../../assets/img/pickerIcon.png';
import styles from './styles';

// (Prop types constants)
const itemPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  labelStyle: Text.propTypes.style,
  value: PropTypes.any,
});

export default class ProPicker extends Component {
  static propTypes = {
    innerPickerStyle: Picker.propTypes.style,
    items: PropTypes.arrayOf(itemPropType).isRequired,
    itemStyle: Text.propTypes.style,
    isPicking: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onChangeSelectedValue: PropTypes.func.isRequired,
    selectedValue: PropTypes.any,
    style: View.propTypes.style,
  };

  static defaultProps = {
    items: [],
    isPicking: false,
    onChangeSelectedValue: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      isPicking: props.isPicking,
    };
  }

  toggleIsPicking() {
    const { isPicking } = this.state;

    this.setState({
      isPicking: !isPicking,
    });

    return !isPicking;
  }

  renderNameSection() {
    const { name } = this.props;

    return (
      <View style={styles.nameSection}>
        <Text style={styles.nameLabel}>
          {name}
        </Text>
      </View>
    );
  }

  renderBodySection() {
    const {
      items,
      selectedValue,
    } = this.props;
    const { isPicking } = this.state;
    const selectedItem = items.find(({ value }) => value === selectedValue);
    const itemSelected = !!selectedItem;
    const selectedItemLabelText = itemSelected
      ? selectedItem.label
      : 'No item selected';
    const selectedItemLabelStyle = [
      styles.selectedItemLabel,
      (!itemSelected ? { opacity: 0.7 } : {}),
    ];
    const bodyButtonStyle = [
      styles.bodyButton,
      (isPicking ? styles.bodyButtonPicking : {}),
    ];

    return (
      <View style={styles.bodySection}>
        <TouchableOpacity
          onPress={() => this.toggleIsPicking()}
          style={bodyButtonStyle}
        >
          <Text style={selectedItemLabelStyle}>
            {selectedItemLabelText}
          </Text>
          {this.renderIsPickingStatusImage()}
        </TouchableOpacity>
        {this.renderInnerPicker()}
      </View>
    );
  }

  renderInnerPicker() {
    const {
      innerPickerStyle,
      items,
      itemStyle,
      onChangeSelectedValue,
      selectedValue,
    } = this.props;
    const { isPicking } = this.state;

    // If picker isn't currently picking, don't render inner picker...
    if (!isPicking) {
      return null;
    }

    return (
      <Picker
        selectedValue={selectedValue}
        onValueChange={onChangeSelectedValue}
        itemStyle={[styles.innerPickerItemStyle, itemStyle]}
        style={[styles.innerPicker, innerPickerStyle]}
      >
        {items.map(item => this.renderInnerPickerItem(item))}
      </Picker>
    );
  }

  renderInnerPickerItem(item) {
    return (
      <Picker.Item
        key={item.value}
        label={item.label}
        value={item.value}
        style={item.labelStyle}
      />
    );
  }

  renderIsPickingStatusImage() {
    const { isPicking } = this.state;
    const imageStyle = [
      styles.isPickingStatusImage,
      (isPicking ? { tintColor: 'white' } : {}),
    ];

    return (
      <Image
        source={pickerIconImage}
        style={imageStyle}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNameSection()}
        {this.renderBodySection()}
      </View>
    );
  }
}
