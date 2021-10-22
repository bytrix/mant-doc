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
:::


|参数|说明|类型|默认值|
|-|-|-|-|
|title|标题|String|""|
|visible|显示\隐藏|Boolean|false|
|maskClosable|点击蒙层是否允许关闭|Boolean|true|
|@close|关闭事件|Function||