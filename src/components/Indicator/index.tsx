import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { useProgressBarStyle } from '../../hooks/useProgressBarStyle';
import type { IStepProps, IndicatorProps } from '../../interfaces';

const ProgressBar = ({ index, currentStep, duration, style }: IStepProps) => {
  const { animatedStyles, wrapperBackgroundColor } = useProgressBarStyle({ index, currentStep, duration, style });

  return (
    <Animated.View key={index} style={[styles.progressBarWrapper, { backgroundColor: wrapperBackgroundColor }]}>
      <Animated.View style={[styles.progressBar, animatedStyles]} />
    </Animated.View>
  );
};

const Indicator = ({ numberOfSteps, currentStep, duration, style }: IndicatorProps) => {
  return (
    <Animated.View style={styles.container}>
      {Array(numberOfSteps)
        .fill(0)
        .map((_, index) => (
          <ProgressBar key={index} index={index} currentStep={currentStep} duration={duration} style={style} />
        ))}
    </Animated.View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
    zIndex: 9999
  },
  progressBarWrapper: {
    height: 3,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 2,
    marginHorizontal: 3
  },
  progressBar: {
    height: 3,
    borderRadius: 2
  }
});
