import './rn-addons';

import * as Font from 'expo-font';

import { configure, getStorybookUI } from '@storybook/react-native';

import { AppRegistry } from 'react-native';
import { loadStories } from './storyLoader';
import { setupGlobalDecorators } from './global_decorators';

Promise.all(loadFont).then(() =>
{
  console.log('Storybook LoadResourcesAsync done'); // this is quick enough that it works.
}).catch((err) => { console.log(err) });

const loadFont = [
  Font.loadAsync({
    // This is the font that we are using for our tab bar
    // ...Icon.Ionicons.font,
    // We include SpaceMono because we use it in HomeScreen.js. Feel free
    // to remove this if you are not using it in your app
    'space-mono': require('assets/fonts/SpaceMono-Regular.ttf')
  })
];

// import stories
configure(() => {
  setupGlobalDecorators();
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  // asyncStorage: require('@react-native-community/async-storage').default || require('react-native').AsyncStorage || null
  asyncStorage: require('react-native').AsyncStorage || null
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
