---
id: challenges
title: Challenges
---

### React Native Web

- [React native web](https://github.com/necolas/react-native-web) enables rendering React native components on web.
<!-- - This gives us access to components like Modal/Virtualized list (FlatList) out of the box with react-native-web. -->
- This enables us to create components like checkbox/radio and reuse them on web without breaking the UI.
- However, the challenging part is to get the correct accessibility behavior.
- React native web does take this into [consideration](https://necolas.github.io/react-native-web/docs/?path=/docs/guides-accessibility--page) and maps [RN accessibility](https://reactnative.dev/docs/accessibility) props to equivalent ARIA. But getting the keyboard navigation right still requires efforts.

### Why not directly use React aria with react native web?

Spreading props from [React Aria](https://react-spectrum.adobe.com/react-aria/) doesn't always work with react-native-web.

Below props [are not whitelisted](https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/View/index.js#L25) to be passed on View.

- role (needs to be passed as accessibilityRole), tabIndex (should be set via ref or using focusable/accessible), id (needs to be passed as nativeID).

- [onKeyDown cannot be passed to Pressable](https://github.com/necolas/react-native-web/issues/1862) - should be set using ref.

This makes sense as they're not valid React native props. If one needs all of the above, one can simply use an appropriate html element from React DOM and react-native-web will not complain. 
But using something outside of React native means you won't have access to RN props. e.g. (onLayout, Animated).

- React native Aria ensures that hooks from [React Aria](https://react-spectrum.adobe.com/react-aria/) works as expected on React native web and provides accessibility equavivalents on React native.

<!-- ### Example

- Building a custom radio group using react-native-aria.

### Implementation

1. RadioGroup

- Define RadioContext (Using context will enable `<Radio />` access the `<RadioGroup />` state).
- [useRadioGroupState](https://react-spectrum.adobe.com/react-stately/useRadioGroupState.html) will manage the group state.
- useRadioGroup returns [React Aria](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html) for web and [React accessibility](https://reactnative.dev/docs/accessibility) props for iOS/Android.

```
import { useRadioGroupState } from "@react-stately/radio";
import { useRadio, useRadioGroup } from "@react-native-aria/radio";
import { Text, View } from "react-native";

let RadioContext = React.createContext();

export function RadioGroup(props) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <View {...radioGroupProps}>
      <Text {...labelProps}>
        {label}
      </Text>
      <RadioContext.Provider
        value={{
          isDisabled: props.isDisabled,
          isReadOnly: props.isReadOnly,
          state,
        }}
      >
        {children}
      </RadioContext.Provider>
    </View>
  );
}

```

2. Radio

- Using state from RadioGroup Context.
- useRadio returns [React Aria](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html) for web and [React accessibility](https://reactnative.dev/docs/accessibility) props for iOS/Android.
- For web, we wrap the radio into `<label />`. This gives us [web accessibility](https://www.w3.org/TR/wai-aria-practices-1.1/examples/radio/radio-1/radio-1.html) for free.
  Still we have full control over styling on `radioContent`.

```
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useRadio } from "@react-native-aria/radio";

export function Radio(props) {
  let { state, isReadOnly, isDisabled } = React.useContext(RadioContext);

  const inputRef = React.useRef(null);

  let { inputProps } = useRadio(
    { isReadOnly, isDisabled, ...props },
    state,
    inputRef
  );

  let isSelected = state.selectedValue === props.value;
  const icon = isSelected ? "radiobox-marked" : "radiobox-blank";

  const radioContent = (
     <View style={{ flexDirection: "row", alignItems: "center" }}>
         <View>
            <MaterialCommunityIcons size={30} color={"#000"} name={icon} />
         </View>
         <Text>{props.children}</Text>
      </View>
  )

  return (
    <>
      {Platform.OS === "web" ? (
        <label>
          <VisuallyHidden>
            <input {...inputProps} ref={inputRef}></input>
          </VisuallyHidden>
            {radioContent}
        </label>
      ) : (
        <Pressable {...inputProps}>
            {radioContent}
        </Pressable>
      )}
    </>
  );
}
```

### Usage

```
const RadioExample = () => {
  return (
    <RadioGroup label="Favorite pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
  );
};
``` -->
