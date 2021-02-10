---
id: useMenu
title: useMenu
---

Provides the behavior and accessibility implementation for a menu component. A menu displays a list of actions or options that a user can choose.


### Install

```
yarn add @react-native-aria/menu
```

### Import

```
import { useMenu, useMenuItem } from '@react-native-aria/menu'
```

### API
```
useMenu<T>(
  props: AriaMenuOptions<T>,
  state: TreeState<T>,
  ref: RefObject<HTMLElement>
): MenuAria
useMenuItem<T>(
  props: AriaMenuItemProps,
  state: TreeState<T>,
  ref: RefObject<HTMLElement>
): MenuItemAria
```

## Usage
:::note
Below example needs react-native-web v0.14+ to work due to the Modal component. (Modal component was added in v0.14 in react-native-web)
:::

<iframe src="https://snack.expo.io/embedded/@vidhik/f14380?preview=true&platform=web&theme=dark" height="500" width="100%" />
