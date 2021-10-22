# Tree

::: demo
```html
<template>
    <div>
        <MantTree
            :data="treeData"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            treeData: [
                {
                    id: "1",
                    title: "a",
                    children: [
                        {
                            id: "2",
                            title: "b"
                        }
                    ]
                }
            ]
        }
    }
}
</script>
```
:::


|参数|说明|类型|默认值|
|-|-|-|-|
|data|数据|Array|[]|
|draggable|是否可拖拽|Boolean|false|