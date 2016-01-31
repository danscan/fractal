import { List, Map } from 'immutable';
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

export default new List([
  new Map({
    name: 'View',
    component: View,
  }),
  new Map({
    name: 'Scroll View',
    component: ScrollView,
  }),
  new Map({
    name: 'Image',
    component: Image,
  }),
  new Map({
    name: 'Text',
    component: Text,
  }),
  new Map({
    name: 'Touchable Highlight',
    component: TouchableHighlight,
  }),
  new Map({
    name: 'Touchable Opacity',
    component: TouchableOpacity,
  }),
  new Map({
    name: 'Touchable Without Feedback',
    component: TouchableWithoutFeedback,
  }),
  new Map({
    name: 'Slider (iOS)',
    component: SliderIOS,
  }),
  new Map({
    name: 'Switch',
    component: Switch,
  }),
  new Map({
    name: 'Map View',
    component: MapView,
  }),
  new Map({
    name: 'Web View',
    component: WebView,
  }),
  new Map({
    name: 'Activity Indicator (iOS)',
    component: ActivityIndicatorIOS,
  }),
]);
