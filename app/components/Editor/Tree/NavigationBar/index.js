import React, { Component, Navigator, PropTypes, Text, View } from 'react-native';
import backButtonImage from '../../../../assets/img/backButton.png';
import closeTreeButtonImage from '../../../../assets/img/closeButton.png';
import styles from './styles';

export default class NavigationBar extends Component {
  render() {
    return (
      <Navigator.NavigationBar
        routeMapper={{
          // Title: (...args) => this.getNavigationBarTitle(...args),
          // LeftButton: (...args) => this.getNavigationBarLeftButton(...args),
          // RightButton: (...args) => this.getNavigationBarRightButton(...args),
        }}
        style={styles.container}
      />
    );
  }
}
