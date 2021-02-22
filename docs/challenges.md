---
id: challenges
title: Challenges
---

## Aim

To implement a component library that meets the accessibility requirements for Android, iOS and Web.

## React Native Web

React Native Web enables rendering React Native components on the web. This allows us to create components for Android, iOS and Web in a single codebase.

## Why not directly use React Aria with React Native Web?

Firstly, **React Native Web has all the [features](https://necolas.github.io/react-native-web/docs/accessibility/) to implement accessible web apps.**

However, props spread from [React Aria](https://react-spectrum.adobe.com/react-aria/index.html) hooks don't always work with React Native web components (View, Pressable).

For example:

- role - needs to be passed as accessibilityRole
- tabIndex - needs to be set using focusable
- id - needs to be passed as nativeID
- [onKeyDown can't be passed to Pressable](https://github.com/necolas/react-native-web/issues/1862) - needs to be set using ref

Additionally, future versions of React Native Web will deprecate the usage of aria-\* attributes as [mentioned here](https://github.com/necolas/react-native-web/releases/tag/0.15.0). Since v0.15, each aria-\* attribute has equivalent accessibility\* [mapping](https://necolas.github.io/react-native-web/docs/accessibility/).

React Native ARIA ensures that hooks from [React Aria](https://react-spectrum.adobe.com/react-aria/) work as expected on React Native components and provide [accessibility equivalents](https://reactnative.dev/docs/accessibility) when used on iOS and Android.

:::note
React DOM elements (div, span, etc) work well with React Native Web and you can totally use that with [React Aria](https://react-spectrum.adobe.com/react-aria/index.html). In that case, you may not need this library.
:::
