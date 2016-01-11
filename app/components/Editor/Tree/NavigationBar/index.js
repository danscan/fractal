import React, { Component, Navigator, Text, TouchableOpacity, View } from 'react-native';
import CloseTreeButton from './CloseTreeButton';
import PeekBehindTreeTitle from './PeekBehindTreeTitle';
import styles from './styles';

export const routeMapper = {
  LeftButton(route, navigator, index, navState) {
    // if (index === 0) {
    //   return null;
    // }
    //
    // const previousRoute = navState.routeStack[index - 1];
    //
    // return (
    //   <TouchableOpacity
    //     onPress={() => navigator.pop()}
    //     style={styles.navBarLeftButton}
    //   >
    //     <Text style={[styles.navBarText, styles.navBarButtonText]}>
    //       {previousRoute.getTitle()}
    //     </Text>
    //   </TouchableOpacity>
    // );
  },

  RightButton(route, navigator, index, navState) {
    return (
      <CloseTreeButton/>
    );
  },

  Title(route, navigator, index, navState) {
    const routeTitle = route.getTitle();

    return (
      <PeekBehindTreeTitle title={routeTitle}/>
    );
  },
};

export default class NavigationBar extends Component {
  render() {
    return (
      <Navigator.NavigationBar
        {...this.props}
        renderBar={() => <View/>}
        routeMapper={routeMapper}
        style={styles.container}
      />
    );
  }
}
