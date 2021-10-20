# Icon

::: demo
```html
<template>
    <div>
        <MantIcon
            v-for="icon in icons"
            :icon="['fal', icon]"
            style="margin: 10px"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            icons: [
                'plus',
                'minus',
                'user',
            ]
        }
    }
}
</script>
```
