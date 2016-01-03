import { AppRegistry } from 'react-native';
import App from './app';

// Register app (for embedding in native iOS / Android app)
AppRegistry.registerComponent('App', () => App);

// Export app (for importing into other react-native app / component)
export default App;
