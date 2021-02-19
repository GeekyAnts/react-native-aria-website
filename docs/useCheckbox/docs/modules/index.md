[@react-native-aria/checkbox](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Interfaces

- [CheckboxAria](../interfaces/index.checkboxaria.md)

### Functions

- [useCheckbox](index.md#usecheckbox)
- [useCheckboxGroup](index.md#usecheckboxgroup)
- [useCheckboxGroupItem](index.md#usecheckboxgroupitem)

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

___

### useCheckboxGroup

▸ **useCheckboxGroup**(`props`: AriaCheckboxGroupProps, `_state`: CheckboxGroupState): CheckboxGroupAria

#### Parameters:

Name | Type |
:------ | :------ |
`props` | AriaCheckboxGroupProps |
`_state` | CheckboxGroupState |

**Returns:** CheckboxGroupAria

Defined in: [packages/checkbox/src/useCheckboxGroup.ts:13](https://github.com/GeekyAnts/react-native-aria/blob/0de06a4/packages/checkbox/src/useCheckboxGroup.ts#L13)

___

### useCheckboxGroupItem

▸ **useCheckboxGroupItem**(`props`: AriaCheckboxGroupItemProps, `state`: CheckboxGroupState, `inputRef`: *RefObject*<any\>): [*CheckboxAria*](../interfaces/usecheckbox.checkboxaria.md)

Provides the behavior and accessibility implementation for a checkbox component contained within a checkbox group.
Checkbox groups allow users to select multiple items from a list of options.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`props` | AriaCheckboxGroupItemProps | Props for the checkbox.   |
`state` | CheckboxGroupState | State for the checkbox, as returned by `useCheckboxGroupState`.   |
`inputRef` | *RefObject*<any\> | A ref for the HTML input element.    |

**Returns:** [*CheckboxAria*](../interfaces/usecheckbox.checkboxaria.md)

Defined in: [packages/checkbox/src/useCheckboxGroupItem.ts:26](https://github.com/GeekyAnts/react-native-aria/blob/0de06a4/packages/checkbox/src/useCheckboxGroupItem.ts#L26)
