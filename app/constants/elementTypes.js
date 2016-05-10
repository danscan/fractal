import { List, Map } from 'immutable';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Slider,
  Switch,
  MapView,
  WebView,
  ActivityIndicatorIOS,
} from 'react-native';


// -- Element types
export const ViewElementType = new Map({
  name: 'View',
  component: View,
  imageSource: require('../assets/img/elementTypes/view.png'),
});

export const ScrollViewElementType = new Map({
  name: 'Scroll View',
  component: ScrollView,
  imageSource: require('../assets/img/elementTypes/scrollView.png'),
});


export const ImageElementType = new Map({
  name: 'Image',
  component: Image,
  imageSource: require('../assets/img/elementTypes/image.png'),
});

export const TextElementType = new Map({
  name: 'Text',
  component: Text,
  imageSource: require('../assets/img/elementTypes/text.png'),
});

export const TouchableHighlightElementType = new Map({
  name: 'Touchable Highlight',
  component: TouchableHighlight,
  imageSource: require('../assets/img/elementTypes/touchableHighlight.png'),
});

export const TouchableOpacityElementType = new Map({
  name: 'Touchable Opacity',
  component: TouchableOpacity,
  imageSource: require('../assets/img/elementTypes/touchableOpacity.png'),
});

export const TouchableWithoutFeedbackElementType = new Map({
  name: 'Touchable Without Feedback',
  component: TouchableWithoutFeedback,
  imageSource: require('../assets/img/elementTypes/touchableWithoutFeedback.png'),
});

export const TextInputElementType = new Map({
  name: 'Text Input',
  component: TextInput,
  imageSource: require('../assets/img/elementTypes/textInput.png'),
});

export const SliderElementType = new Map({
  name: 'Slider',
  component: Slider,
  imageSource: require('../assets/img/elementTypes/slider.png'),
});

export const SwitchElementType = new Map({
  name: 'Switch',
  component: Switch,
  imageSource: require('../assets/img/elementTypes/switch.png'),
});

export const MapViewElementType = new Map({
  name: 'Map View',
  component: MapView,
  imageSource: require('../assets/img/elementTypes/mapView.png'),
});

export const WebViewElementType = new Map({
  name: 'Web View',
  component: WebView,
  imageSource: require('../assets/img/elementTypes/webView.png'),
});

export const ActivityIndicatorIOSElementType = new Map({
  name: 'Activity Indicator (iOS)',
  component: ActivityIndicatorIOS,
  imageSource: require('../assets/img/elementTypes/activityIndicator.png'),
});


// -- Element types grouped by category
export default new List([
  new Map({
    name: 'Basic Content',
    elementTypes: new List([
      ViewElementType,
      ScrollViewElementType,
      ImageElementType,
      TextElementType,
    ]),
  }),
  new Map({
    name: 'Inputs',
    elementTypes: new List([
      TouchableOpacityElementType,
      TouchableHighlightElementType,
      TouchableWithoutFeedbackElementType,
      TextInputElementType,
      SliderElementType,
      SwitchElementType,
    ]),
  }),
  new Map({
    name: 'Interactive Content',
    elementTypes: new List([
      MapViewElementType,
      WebViewElementType,
    ]),
  }),
  new Map({
    name: 'Status Indicators',
    elementTypes: new List([
      ActivityIndicatorIOSElementType,
    ]),
  }),
]);


// -- List of all element types
export const allElementTypes = new List([
  ViewElementType,
  ScrollViewElementType,
  ImageElementType,
  TextElementType,
  TouchableOpacityElementType,
  TouchableHighlightElementType,
  TouchableWithoutFeedbackElementType,
  TextInputElementType,
  SliderElementType,
  SwitchElementType,
  MapViewElementType,
  WebViewElementType,
  ActivityIndicatorIOSElementType,
]);
