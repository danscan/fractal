import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SliderIOS,
  Switch,
  MapView,
  WebView,
  ActivityIndicatorIOS,
} from 'react-native';

export default [
  {
    name: 'View',
    component: View,
  },
  {
    name: 'Scroll View',
    component: ScrollView,
  },
  {
    name: 'Image',
    component: Image,
  },
  {
    name: 'Text',
    component: Text,
  },
  {
    name: 'Touchable Highlight',
    component: TouchableHighlight,
  },
  {
    name: 'Touchable Opacity',
    component: TouchableOpacity,
  },
  {
    name: 'Touchable Without Feedback',
    component: TouchableWithoutFeedback,
  },
  {
    name: 'Slider (iOS)',
    component: SliderIOS,
  },
  {
    name: 'Switch',
    component: Switch,
  },
  {
    name: 'Map View',
    component: MapView,
  },
  {
    name: 'Web View',
    component: WebView,
  },
  {
    name: 'Activity Indicator (iOS)',
    component: ActivityIndicatorIOS,
  },
];
