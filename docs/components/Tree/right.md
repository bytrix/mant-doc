# 菜单项右侧展示

::: demo
```html
<template>
    <div>
        <MantTree
            :data="treeData"
        >
            <template slot="right">
                右侧展示
            </template>
        </MantTree>
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

右侧操作使用`EventBus`实现事件通信

::: demo
```html
<template>
    <div>
        <MantTree
            :data="treeData"
        >
            <template slot="right">
                <MantButton>操作</MantButton>
            </template>
        </MantTree>
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
    },
    methods: {
        onAdd(item) {
            alert(`你点击了菜单项目：${item.title}`)
        }
    }
}
</script>
```
:::
