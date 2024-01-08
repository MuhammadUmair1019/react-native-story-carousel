import React from 'react';
import { View, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const ScreenImage = () => {
  return (
    <View>
      <Image
        source={require('../../assets/images/splash-101.jpg')}
        style={{ width, height, resizeMode: 'cover' }}
      />
    </View>
  );
};

export default ScreenImage;
