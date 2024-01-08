export interface IScreenProps {
  onSkip: () => void;
  onPrevious: () => void;
  onSkipIndex: (index: number) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  numberOfSteps: number;
  currentIndex: number;
}

export interface IScreen {
  Screen: React.ComponentType<IScreenProps>;
  duration?: number;
  props?: any;
}

export interface IScreenStyle {
  style?: {
    fillColor?: string;
    unfillColor?: string;
    backgroundColor?: string;
  };
}

export interface ICarouselProps extends IScreenStyle {
  screens: IScreen[];
}

export interface IndicatorProps extends IScreenStyle {
  numberOfSteps: number;
  currentStep: number;
  duration?: number;
}

export interface IStepProps extends IScreenStyle {
  index: number;
  currentStep: number;
  duration?: number;
}

export interface IStepsProps {
  steps: IScreen[];
}

export interface IStepsResult {
  step: IScreen;
  gotoNextStep: () => void;
  gotoPreviousStep: () => void;
  gotoInitialStep: () => void;
  index: number;
  gotoIndex: (index: number) => void;
  numberOfSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
}
