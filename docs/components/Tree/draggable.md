# 可拖拽菜单项

::: demo
```html
<template>
    <div>
        <MantTree
            :data="treeData"
            draggable
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
