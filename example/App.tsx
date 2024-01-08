/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import ScreenCarousel from 'react-native-story-carousel';

import ScreenWImage from './src/screens/ScreenImage';
import ScreenAction from './src/screens/ScreenAction';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const style = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const screens = [
    {
      Screen: ScreenWImage,
      duration: 3
    },
    {
      Screen: ScreenAction
    },
    {
      Screen: ScreenWImage,
      duration: 3
    },
    {
      Screen: ScreenAction,
    }
  ];

  return <ScreenCarousel style={style} screens={screens} />;
}
export default App;
