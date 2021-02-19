[@react-native-aria/checkbox](../README.md) / [Exports](../modules.md) / index.web

# Module: index.web

## Table of contents

### References

- [useCheckboxGroup](index_web.md#usecheckboxgroup)

### Functions

- [useCheckbox](index_web.md#usecheckbox)
- [useCheckboxGroupItem](index_web.md#usecheckboxgroupitem)

## References

### useCheckboxGroup

Re-exports: [useCheckboxGroup](usecheckboxgroup_web.md#usecheckboxgroup)

## Functions

### useCheckbox

▸ **useCheckbox**(`props`: AriaCheckboxProps, `state`: ToggleState, `inputRef`: *RefObject*<HTMLInputElement\>): CheckboxAria

Provides the behavior and accessibility implementation for a checkbox component.
Checkboxes allow users to select multiple items from a list of individual items, or
to mark one individual item as selected.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`props` | AriaCheckboxProps | Props for the checkbox.   |
`state` | ToggleState | State for the checkbox, as returned by `useToggleState`.   |
`inputRef` | *RefObject*<HTMLInputElement\> | A ref for the HTML input element.    |

**Returns:** CheckboxAria

Defined in: node_modules/@react-aria/checkbox/dist/types.d.ts:17

___

### useCheckboxGroupItem

▸ **useCheckboxGroupItem**(`props`: AriaCheckboxGroupItemProps, `state`: CheckboxGroupState, `inputRef`: *RefObject*<HTMLInputElement\>): CheckboxAria

Provides the behavior and accessibility implementation for a checkbox component contained within a checkbox group.
Checkbox groups allow users to select multiple items from a list of options.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`props` | AriaCheckboxGroupItemProps | Props for the checkbox.   |
`state` | CheckboxGroupState | State for the checkbox, as returned by `useCheckboxGroupState`.   |
`inputRef` | *RefObject*<HTMLInputElement\> | A ref for the HTML input element.    |

**Returns:** CheckboxAria

Defined in: node_modules/@react-aria/checkbox/dist/types.d.ts:38
