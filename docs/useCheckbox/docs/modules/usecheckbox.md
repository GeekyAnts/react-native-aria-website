[@react-native-aria/checkbox](../README.md) / [Exports](../modules.md) / useCheckbox

# Module: useCheckbox

## Table of contents

### Interfaces

- [CheckboxAria](../interfaces/usecheckbox.checkboxaria.md)

### Functions

- [useCheckbox](usecheckbox.md#usecheckbox)

## Functions

### useCheckbox

▸ **useCheckbox**(`props`: AriaCheckboxProps, `state`: ToggleState, `inputRef`: *RefObject*<HTMLInputElement\>): [*CheckboxAria*](../interfaces/usecheckbox.checkboxaria.md)

Provides the behavior and accessibility implementation for a checkbox component.
Checkboxes allow users to select multiple items from a list of individual items, or
to mark one individual item as selected.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`props` | AriaCheckboxProps | Props for the checkbox.   |
`state` | ToggleState | State for the checkbox, as returned by `useToggleState`.   |
`inputRef` | *RefObject*<HTMLInputElement\> | A ref for the HTML input element.    |

**Returns:** [*CheckboxAria*](../interfaces/usecheckbox.checkboxaria.md)

Defined in: [packages/checkbox/src/useCheckbox.ts:20](https://github.com/GeekyAnts/react-native-aria/blob/0de06a4/packages/checkbox/src/useCheckbox.ts#L20)
