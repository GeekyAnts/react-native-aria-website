---
id: challenges
title: Challenges
---

### React Native Web

- [React native web](https://github.com/necolas/react-native-web) enables rendering React native components on web.
<!-- - This gives us access to components like Modal/Virtualized list (FlatList) out of the box with react-native-web. -->
- This enables us to create components like checkbox/radio and reuse them on web without breaking the UI.
- However, the challenging part is to get the correct accessibility behavior.
- React native web does take this into [consideration](https://necolas.github.io/react-native-web/docs/?path=/docs/guides-accessibility--page) and tries to map [RN accessibility](https://reactnative.dev/docs/accessibility) props to equivalent ARIA.
- But getting the keyboard navigation right still requires manual efforts.

### Why not directly use React aria with react native web?

Spreading props from [React Aria](https://react-spectrum.adobe.com/react-aria/) doesn't always work with react-native-web.

Below props [are not whitelisted](https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/View/index.js#L25) to be passed on View.

- role (needs to be passed as accessibilityRole), tabIndex (should be set via ref or using focusable/accessible), id (needs to be passed as nativeID).

- [onKeyDown cannot be passed to Pressable](https://github.com/necolas/react-native-web/issues/1862) - Can be set using ref.

This makes sense as they're not valid React native props. If you need all of the above, simply use a div or any html element from React DOM and react-native-web will not complain.

- But this will require some conditional coding when you want to create a component library that works on web and mobile.

### Let us take an example.

- Building a radio group component on React native.

**Todo**

1. Show an example of creating a custom radio button.
2. Feature downsides and accessibility issues of using the same component on react native web.
3. Describe how it can be solved using react-native-aria useRadioHook.

<!-- #### Getting most out of react-native-aria on react-native-web

1. Semantic markup

   Since there are just View/Text primitive components in RN, semantic markup should be achieved using [Expo HTML elements](https://github.com/expo/expo/tree/master/packages/html-elements)

### React native iOS/Android.

1. RN doesn't ship with a Radio/Checkbox component. -->
