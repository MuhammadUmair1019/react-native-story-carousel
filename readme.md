# 📱 react-native-story-carousel

A React Native library for creating interactive and engaging screen stories.

![Preview GIF](https://s13.gifyu.com/images/S0bSz.gif)

## Peer Dependencies

The `react-native-story-carousel` library relies on certain peer dependencies to ensure proper functionality. Please make sure to install the following dependencies in your project:

- [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated)

Make sure to check for the latest version of each peer dependency and install it accordingly.

## Installation

To install the Story Carousel library, use the following commands:

```bash
npm install react-native-story-carousel 
```

## Usage

### Props

The `StoryCarousel` component takes an array of screens as a prop, each component (Screen) have access to these props by default:

| Prop          | Type                              | Description                                      |
| ------------- | --------------------------------- | ------------------------------------------------- |
| `onSkip`      | `() => void`                      | Function to be called when the user wants to skip the current screen. |
| `onPrevious`  | `() => void`                      | Function to be called when the user wants to go back to the previous screen. |
| `onSkipIndex` | `(index: number) => void`         | Function to be called when the user wants to skip directly to a specific screen. |
| `isFirstStep` | `boolean`                         | Boolean indicating if the current screen is the first in the sequence. |
| `isLastStep`  | `boolean`                         | Boolean indicating if the current screen is the last in the sequence. |
| `numberOfSteps` | `number`                         | Total number of screens in the sequence.           |
| `currentIndex` | `number`                         | Index of the current screen.                        |

### Style Props

The `style` prop, represented by the `IScreenStyle` interface, allows you to customize the appearance of the Story Carousel:

| Prop                | Type     | Description                                     |
| ------------------- | -------- | ----------------------------------------------- |
| `fillColor`         | `string` | Color of the filled portion of the progress bar. |
| `unfillColor`       | `string` | Color of the unfilled portion of the progress bar. |
| `backgroundColor`   | `string` | Background color of the Story Carousel component. |


### Screen Structure

The `screens` prop for the `StoryCarousel` component should be an array of objects, each representing a screen in the sequence. The structure of each object should adhere to the `IScreen` interface:

| Key        | Type                           | Description                                                  |
| ---------- | ------------------------------ | ------------------------------------------------------------ |
| `Screen`   | `React.ComponentType<IScreenProps>` | The React component representing the content of the screen. |
| `duration` | `number`                       | (Optional) Display time for the screen in sec. If not defined, the screen will wait for user action before transitioning to the next screen. |
| `props`    | `any`                          | (Optional) Custom props to be passed to the `Screen` component. |

### Example

```jsx
import StoryCarousel from 'react-native-story-carousel';

const screens = [
  {
    Screen: FirstScreen,
    duration: 2, // Display time in sec
    props: {/* Custom props for FirstScreen */}
  },
  {
    Screen: SecondScreen,
    // If duration not defined then no progress bar, wait for user action
    props: {/* Custom props for SecondScreen */}
  },
  // ... more screens
];

const style = {
  fillColor: '#3498db',
  unfillColor: '#ecf0f1',
  backgroundColor: '#2c3e50',
};

const App = () => {
  return (
    <StoryCarousel style={style} screens={screens} />
  );
};

export default App;
```
In this example, each screen component can access and utilize the provided props. 

## License

MIT