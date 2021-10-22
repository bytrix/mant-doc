# Card

::: demo
```html
<template>
    <div>
        <MantCard title="Title">
            Content
        </MantCard>
        <MantCard>
            <template slot="header">
                custom header
            </template>
            <template slot="header:right">
                right
            </template>
            Content
        </MantCard>
        <MantCard title="Title">
            Content
            <template slot="footer">
                footer
            </template>
        </MantCard>
    </div>
</template>
```
:::

|参数|说明|类型|默认值|
|-|-|-|-|
|title|卡片标题|String|""|
|slot|卡片内容|