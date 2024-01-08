import { useEffect, useState } from 'react';
import { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import type { IStepProps } from '../interfaces';
import { defaultTheme } from '../styles/theme';

export const useProgressBarStyle = ({ index, currentStep, duration, style }: IStepProps) => {
  const [isFilled, setIsFilled] = useState(false);

  const isPastStep = index < currentStep - 1;
  const stepDuration = duration ? duration * 1000 : 0;
  const wFillDuration = isPastStep ? 0 : stepDuration;
  const bFillDuration = duration ? 0 : 200;

  const isFilledWrapper = index === currentStep - 2;
  const wrapperBackgroundColor = isFilledWrapper || isPastStep ? style?.fillColor || defaultTheme.fillColor : style?.unfillColor || defaultTheme.unfillColor;

  useEffect(() => {
    const delay = 0.1;
    const timeoutId = setTimeout(() => {
      setIsFilled(index === currentStep - 1);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [index, currentStep]);

  const animatedStyles = useAnimatedStyle(() => ({
    width: withTiming(isFilled ? '100%' : '0%', { duration: wFillDuration, easing: Easing.linear }),
    backgroundColor: withTiming(isFilled || isPastStep ? style?.fillColor || defaultTheme.fillColor : style?.unfillColor || defaultTheme.unfillColor, {
      duration: bFillDuration,
      easing: Easing.linear
    })
  }));

  return { animatedStyles, wrapperBackgroundColor };
};
