---
id: useCheckbox
title: useCheckbox
---

Provides the behavior and accessibility implementation for a checkbox component. Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.


### Install

```
yarn add @react-native-aria/checkbox
```

### Import

```
import { useCheckbox } from '@react-native-aria/checkbox'
```

### API

```
useCheckbox(props: AriaCheckboxProps, state: ToggleState, inputRef: RefObject): CheckboxAria
```

## Usage

<iframe src="https://snack.expo.io/embedded/@nishanbende/usecheckbox?preview=true&platform=web&theme=dark" height="600" width="100%" />

## Internationalization

### RTL

In right-to-left languages, the checkbox should be mirrored. The checkbox should be placed on the right
side of the label. Ensure that your CSS accounts for this.
