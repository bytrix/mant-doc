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

