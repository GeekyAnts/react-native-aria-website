---
id: useCheckboxGroup
title: useCheckboxGroup
---

Provides the behavior and accessibility implementation for a checkbox group component. Checkbox groups allow users to select multiple items from a list of options.

### Install

```
yarn add @react-native-aria/checkbox
```

### Import

```
import {useCheckboxGroup, useCheckboxGroupItem} from '@react-native-aria/checkbox'
```

### API

```
useCheckboxGroup(props: AriaCheckboxGroupProps, state: CheckboxGroupState): CheckboxGroupAria
useCheckboxGroupItem(
  props: AriaCheckboxGroupItemProps,
  state: CheckboxGroupState,
  inputRef: RefObject<HTMLInputElement>
): CheckboxAria
```

### Usage

<iframe src="https://snack.expo.io/embedded/@nishanbende/checkbox?preview=true&platform=web&theme=dark" height="600" width="100%" />

<!-- ## For web

Refer for usage [Checkbox](https://react-spectrum.adobe.com/react-aria/Checkbox.html)

## For iOS/Android -->

