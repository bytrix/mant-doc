# Modal

::: demo
```html
<template>
    <div>
        <MantButton @click="visible = true">
            Show Modal
        </MantButton>
        <MantModal
            title="Title"
            :visible="visible"
            @close="visible = false"
        >
            Content
        </MantModal>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                visible: false
            }
        }
    }
</script>
```