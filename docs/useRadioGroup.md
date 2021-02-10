---
id: useRadioGroup
title: useRadioGroup
---

Provides the behavior and accessibility implementation for a radio group component. Radio groups allow users to select a single item from a list of mutually exclusive options.

### Install

```
yarn add @react-native-aria/radio
```

### Import

```
import {useRadioGroup, useRadio} from '@react-native-aria/radio'
```

### API

```
useRadioGroup(props: AriaRadioGroupProps, state: RadioGroupState): RadioGroupAria
useRadio(
  props: RadioAriaProps,
  state: RadioGroupState,
  ref: RefObject<HTMLElement>
): RadioAria
```

### Usage

<iframe src="https://snack.expo.io/embedded/@nishanbende/radiogroup?preview=true&platform=web&theme=dark" height="500" width="100%" />
