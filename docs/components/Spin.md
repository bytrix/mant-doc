# Spin

::: demo
```html
<template>
    <div>
        <MantButton @click="loading = !loading">toggle loading: {{loading}}</MantButton>
        <MantSpin :loading="loading">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dolore placeat corporis voluptatibus molestias similique pariatur commodi possimus inventore minus. A molestias quasi impedit doloremque. Veniam dolorum natus asperiores voluptatibus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dolore placeat corporis voluptatibus molestias similique pariatur commodi possimus inventore minus. A molestias quasi impedit doloremque. Veniam dolorum natus asperiores voluptatibus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dolore placeat corporis voluptatibus molestias similique pariatur commodi possimus inventore minus. A molestias quasi impedit doloremque. Veniam dolorum natus asperiores voluptatibus.</p>
        </MantSpin>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: true
            }
        }
    }
</script>
```
:::

|参数|说明|类型|默认值|
|-|-|-|-|
|loading|加载状态|Boolean|false|