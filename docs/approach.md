---
id: approach
title: Approach
---

<!-- - [React stately](https://react-spectrum.adobe.com/react-stately/) - hooks for managing component states. -->

- For web, we've used [React Aria](https://react-spectrum.adobe.com/react-aria/index.html) which provides [ARIA](https://www.w3.org/TR/wai-aria-1.1/) attributes and behaviour (keyboard navigation) for commonly used components.

- For iOS/Android, we've created similar hooks like React Aria but instead of web-supported ARIA/behaviour, it returns [React Native supported accessibility props](https://reactnative.dev/docs/accessibility).

About the architecture - [React Spectrum](https://react-spectrum.adobe.com/architecture.html)

<!-- 1. RN web ships with it's own Modal component, so no need to add any additional libraries.
2. RN web ships with it's on Pressable component which removes the need for using divs for buttons! -->
