---
id: challenges
title: Challenges/Findings
---

### React Native Web

- [React native web](https://github.com/necolas/react-native-web) enables rendering React native components on web.
- This gives us access to components like Modal/Virtualized list (FlatList) out of the box with react-native-web.

### To understand challenges, let us take an example.

- Building a radio group component on React native.

#### Getting most out of react-native-aria on react-native-web

1. Semantic markup

   Since there are just View/Text primitive components in RN, semantic markup should be achieved using [Expo HTML elements](https://github.com/expo/expo/tree/master/packages/html-elements)

### React native iOS/Android.

1. RN doesn't ship with a Radio/Checkbox component.
