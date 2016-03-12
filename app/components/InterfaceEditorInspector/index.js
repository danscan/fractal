import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import navigatorButtonImage from '../../assets/img/navigatorButton.png';
import styleEditorButtonImage from '../../assets/img/styleEditorButton.png';
import propsEditorButtonImage from '../../assets/img/propsEditorButton.png';
import textEditorButtonImage from '../../assets/img/textEditorButton.png';
import { elementPropType } from '../../constants/propTypes';
import Navigator from './Navigator';
import StyleEditor from './StyleEditor';
import PropsEditor from './PropsEditor';
import TextEditor from './TextEditor';
import styles from './styles';

export default class InterfaceEditorInspector extends Component {
  static propTypes = {
    selectedElement: elementPropType.isRequired,
    selectedTab: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired,
  };

  getSelectedElementTypeDependentContentTabElement() {
    const { selectedElement } = this.props;

    if (selectedElement.get('type') === Text) {
      return <TextEditor/>;
    }
  }

  getSelectedElementTypeDependentContentTab() {
    const { selectedElement } = this.props;

    if (selectedElement.get('type') === Text) {
      return this.renderTabBarButton({
        index: 3,
        imageSource: textEditorButtonImage,
        imageStyle: styles.textEditorTabBarButtonImage,
      });
    }
  }

  renderTabBar() {
    return (
      <View style={styles.tabBar}>
        {this.renderTabBarButton({
          index: 0,
          imageSource: navigatorButtonImage,
          imageStyle: styles.navigatorTabBarButtonImage,
        })}
        {this.renderTabBarButton({
          index: 1,
          imageSource: styleEditorButtonImage,
          imageStyle: styles.styleEditorTabBarButtonImage,
        })}
        {this.renderTabBarButton({
          index: 2,
          imageSource: propsEditorButtonImage,
          imageStyle: styles.propsEditorTabBarButtonImage,
        })}
        {this.getSelectedElementTypeDependentContentTab()}
      </View>
    );
  }

  renderTabBarButton({ index, imageSource, imageStyle }) {
    const {
      selectedTab,
      onSelectTab,
    } = this.props;
    const tabBarButtonStyle = [
      styles.tabBarButton,
      (selectedTab === index
        ? styles.tabBarButtonSelected
        : {}),
    ];
    const tabBarButtonImageStyle = [
      styles.tabBarButtonImage,
      (selectedTab === index
        ? styles.tabBarButtonImageSelected
        : {}),
      imageStyle,
    ];

    return (
      <TouchableOpacity key={index} onPress={() => onSelectTab(index)} style={tabBarButtonStyle}>
        <Image source={imageSource} style={tabBarButtonImageStyle}/>
      </TouchableOpacity>
    );
  }

  renderSelectedTabComponent() {
    const { selectedTab } = this.props;

    if (selectedTab === 0) {
      return <Navigator/>;
    }

    if (selectedTab === 1) {
      return <StyleEditor/>;
    }

    if (selectedTab === 2) {
      return <PropsEditor/>;
    }

    if (selectedTab === 3) {
      return this.getSelectedElementTypeDependentContentTabElement();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTabBar()}
        {this.renderSelectedTabComponent()}
      </View>
    );
  }
}
