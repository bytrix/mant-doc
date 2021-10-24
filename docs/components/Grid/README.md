# Grid 栅格

::: demo
```html
<template>
    <div>
        <MantRow>
            <MantCol :flex="1">
                <div style="background-color: blue; height: 36px" />
            </MantCol>
            <MantCol :flex="1">
                <div style="background-color: blue; height: 36px" />
            </MantCol>
            <MantCol :flex="1">
                <div style="background-color: blue; height: 36px" />
            </MantCol>
        </MantRow>
    </div>
</template>
```
:::


::: demo
```html
<template>
    <div>
        <MantRow :gutter="[36, 36]">
            <MantCol :flex="1">
                <div style="background-color: blue; height: 36px" />
            </MantCol>
            <MantCol :flex="1">
                <div style="background-color: blue; height: 36px" />
            </MantCol>
            <MantCol :flex="1">
                <div style="background-color: blue; height: 36px" />
            </MantCol>
        </MantRow>
    </div>
</template>
```
:::


|参数|说明|类型|默认值|
|-|-|-|-|
|gutter|间距|Array|undefined|
