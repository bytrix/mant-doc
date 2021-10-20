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