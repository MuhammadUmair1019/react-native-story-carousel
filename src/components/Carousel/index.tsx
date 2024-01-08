import React, { useCallback } from 'react';
import { Dimensions, GestureResponderEvent, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import Indicator from '../../components/Indicator';
import useSteps from '../../hooks/useSteps';
import type { ICarouselProps } from '../../interfaces';
import { colors } from '../../styles/theme';

const Carousel = ({ screens, style }: ICarouselProps) => {
  const {
    step: { Screen, duration, props },
    numberOfSteps,
    index,
    isFirstStep,
    isLastStep,
    gotoNextStep,
    gotoPreviousStep,
    gotoIndex
  } = useSteps({ steps: screens });

  const handlePrevious = useCallback(() => {
    if (index > 0) {
      gotoPreviousStep();
    }
  }, [index, gotoPreviousStep]);

  const handleNext = useCallback(() => {
    gotoNextStep();
  }, [gotoNextStep]);

  const handleTap = (event: GestureResponderEvent) => {
    if (!duration) return;

    const { locationX } = event.nativeEvent;
    const screenWidth = Dimensions.get('screen').width;

    if (locationX < screenWidth / 2) {
      handlePrevious();
    } else {
      handleNext();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={[styles.container, { backgroundColor: style?.backgroundColor || colors.white }]}>
        <Indicator style={style} duration={duration} numberOfSteps={numberOfSteps} currentStep={index + 1} />
        <View style={styles.backgroundContainer}>
          <Screen
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onSkipIndex={gotoIndex}
            onSkip={gotoNextStep}
            onPrevious={gotoPreviousStep}
            currentIndex={index}
            numberOfSteps={numberOfSteps}
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  backgroundContainer: {
    position: 'absolute',
    height: '100%'
  }
});
