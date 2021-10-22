# Dropdown

::: demo
```html
<template>
    <div style="display: flex">
        <MantDropdown text="File">
            <MantDropdownItem text="New File" />
            <MantDropdownItem text="New Window" />
            <MantDropdownItem text="Open Recent">
                <MantDropdownItem text="~/Desktop/code/file-1" />
                <MantDropdownItem text="~/Desktop/code/file-2" />
                <MantDropdownItem text="~/Desktop/code/file-3" />
            </MantDropdownItem>
        </MantDropdown>
        <MantDropdown text="Edit">
            <MantDropdownItem text="Undo" />
            <MantDropdownItem text="Redo" />
        </MantDropdown>
        <MantDropdown text="Selection">
            <MantDropdownItem text="Select All" />
            <MantDropdownItem text="Expand Selection" />
        </MantDropdown>
    </div>
</template>
```
:::

设置触发器

::: demo
```html
<template>
    <div style="display: flex">
        <MantDropdown text="File" :trigger="['click']">
            <MantDropdownItem text="New File" />
            <MantDropdownItem text="New Window" />
            <MantDropdownItem text="Open Recent">
                <MantDropdownItem text="~/Desktop/code/file-1" />
                <MantDropdownItem text="~/Desktop/code/file-2" />
                <MantDropdownItem text="~/Desktop/code/file-3" />
            </MantDropdownItem>
        </MantDropdown>
        <MantDropdown text="Edit" :trigger="['click']">
            <MantDropdownItem text="Undo" />
            <MantDropdownItem text="Redo" />
        </MantDropdown>
        <MantDropdown text="Selection" :trigger="['click']">
            <MantDropdownItem text="Select All" />
            <MantDropdownItem text="Expand Selection" />
        </MantDropdown>
    </div>
</template>
```
:::


|参数|说明|类型|默认值|
|-|-|-|-|
|text|文本|String|""|
|trigger|触发器|['click', 'mouseenter']: Array|['mouseenter']|