# Button 按钮

::: demo
```html
<template>
    <div>
        <MantButton>Button</MantButton>
        <MantButton type="primary">Button</MantButton>
        <MantButton type="primary" disabled>Button</MantButton>
        <MantButton type="link">Button</MantButton>
        <MantButton :icon="['fal', 'plus']">Button</MantButton>
        <MantButton circle :icon="['fal', 'plus']"></MantButton>
        <MantButton plain>Button</MantButton>
    </div>
</template>
```
:::

|参数|说明|类型|默认值|
|-|-|-|-|
|type|设置按钮类型|primary \| link \| default|default|
|icon|设置按钮的图标组件|['fal', 'plus']: Array|[]|
|circle|设置按钮为圆形|Boolean|false|
|plain|设置为纯按钮样式|Boolean|false|
|size|设置按钮大小|large \| small|""|
|disabled|不可用状态|Boolean|false|