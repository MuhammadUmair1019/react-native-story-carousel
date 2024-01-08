import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, useColorScheme, Dimensions, Image } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import type { IScreenProps } from 'react-native-story-carousel';

const { width } = Dimensions.get('window');

const ScreenAction = ({ onPrevious, onSkip, isLastStep }: IScreenProps) => {
  const styles = getStyles();

  const onSubmit = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {!isLastStep && (
          <TouchableOpacity onPress={onPrevious}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Previous</Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={isLastStep ? onSubmit : onSkip}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{isLastStep ? 'Start now' : 'Next'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {isLastStep && <Image source={require('../../assets/images/splash-102.jpg')} style={styles.image} />}
    </View>
  );
};
// source={{ uri: 'https://source.unsplash.com/rando' }}

const getStyles = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonContainer: {
      marginHorizontal: 20,
      width: '100%',
      zIndex: 9999999
    },
    button: {
      backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
      alignItems: 'center',
      zIndex: 999,
      padding: 10,
      marginTop: 20,
      marginHorizontal: 20,
      borderRadius: 5
    },
    buttonText: {
      color: isDarkMode ? Colors.darker : Colors.lighter,
      textAlign: 'center'
    },
    image: {
      width: '100%',
      height: '100%',
      marginTop: 20,
      position: 'absolute',
      bottom: 0
    }
  });
};

export default ScreenAction;
