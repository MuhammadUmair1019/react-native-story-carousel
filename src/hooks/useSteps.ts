import { useState, useEffect, useCallback } from 'react';

import type { IStepsProps, IStepsResult } from '../interfaces';

const useSteps = ({ steps }: IStepsProps): IStepsResult => {
  const [index, setIndex] = useState(0);
  const isFirstStep = index === 0;
  const isLastStep = index === steps.length - 1;

  const gotoNextStep = useCallback(() => {
    if (index < steps.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [index, steps.length]);

  const gotoPreviousStep = useCallback(() => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  }, [index]);

  const gotoIndex = (_index: number) => {
    if (_index >= 0 && _index <= steps.length - 1) {
      setIndex(_index);
    }
  };

  const gotoInitialStep = () => {
    setIndex(0);
  };

  const step = steps[index];

  useEffect(() => {
    if (step.duration && !isLastStep) {
      const timeoutId = setTimeout(gotoNextStep, step.duration * 1000);

      return () => clearTimeout(timeoutId);
    }

    return undefined;
  }, [step.duration, isLastStep, gotoNextStep]);

  return {
    step,
    gotoNextStep,
    gotoPreviousStep,
    index,
    gotoIndex,
    gotoInitialStep,
    numberOfSteps: steps.length,
    isFirstStep,
    isLastStep
  };
};

export default useSteps;
