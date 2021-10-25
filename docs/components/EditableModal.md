# EditableModal 可编辑模态框

::: demo
```html
<template>
    <div>
        <MantButton @click="visible = true">Open EditableModal</MantButton>
        <MantEditableModal :visible="visible" @close="visible = false">a</MantEditableModal>
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
:::

同Modal