---
id: useOverlayPosition
title: useOverlayPosition
---
Handles positioning overlays like popovers and menus relative to a trigger element, and updating the position when the window resizes.

### Install

```
yarn add @react-native-aria/overlays
```

### Import

```
import {useOverlayPosition} from '@react-native-aria/overlays'
```

### API
```
useOverlayPosition(props: AriaPositionProps): PositionAria
```

## Usage
:::note
Below example needs react-native-web v0.14+ to work due to the Modal component. (Modal component was added in v0.14 in react-native-web)
:::


<iframe src="https://snack.expo.io/embedded/@nishanbende/useoverlayposition?preview=true&platform=web&theme=dark" height="500" width="100%" />
