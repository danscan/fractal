import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import navigatorButtonImage from '../../assets/img/navigatorButton.png';
import styleEditorButtonImage from '../../assets/img/styleEditorButton.png';
import propsEditorButtonImage from '../../assets/img/propsEditorButton.png';
import Navigator from './Navigator';
import StyleEditor from './StyleEditor';
import PropsEditor from './PropsEditor';
import styles from './styles';

export default class Inspector extends Component {
  static propTypes = {
    selectedTab: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired,
  };

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

    return (
      <TouchableOpacity key={index} onPress={() => onSelectTab(index)} style={tabBarButtonStyle}>
        <Image source={imageSource} style={imageStyle}/>
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
