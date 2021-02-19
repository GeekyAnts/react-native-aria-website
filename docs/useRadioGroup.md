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

#### AriaRadioGroupProps

Props for the [radio group](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html).

#### RadioGroupState

State for the radio group, as returned by [useRadioGroupState](https://react-spectrum.adobe.com/react-stately/useRadioGroupState.html).

#### RadioGroupAria

```
{
  /** Props for the radio group wrapper element. */
  radioGroupProps: HTMLAttributes<HTMLElement> & AccessibilityProps,

  /** Props for the radio group's visible label (if any). */
  labelProps: HTMLAttributes<HTMLElement> & AccessibilityProps
}
```

#### RadioAriaProps

- Props for the [radio.](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html)

#### RadioAria

```
{
  /** Props for the input or Pressable/Touchable element. */
  inputProps: InputHTMLAttributes<HTMLElement> & AccessibilityProps,
}
```

#### ref

Ref to the HTML input element.

### Example

<iframe src="https://snack.expo.io/embedded/@nishanbende/radiogroup?preview=true&platform=web&theme=dark" height="500" width="100%" />
