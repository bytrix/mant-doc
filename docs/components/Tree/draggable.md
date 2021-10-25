# 可拖拽菜单项

::: demo
```html
<template>
    <div>
        <MantTree
            :data="treeData"
            draggable
            :properties="{
                id: '_id'
            }"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            treeData: [
                {
                    _id: "1",
                    title: "喜剧",
                    children: [
                        {
                            _id: "1-1",
                            title: "瑞克和莫蒂 第五季",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        },
                        {
                            _id: "1-2",
                            title: "爱，死亡和机器人",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        },
                        {
                            _id: "1-3",
                            title: "猫和老鼠",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        }
                    ]
                },
                {
                    _id: "2",
                    title: "动作",
                    children: [
                        {
                            _id: "2-1",
                            title: "成龙历险记 第一季",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        },
                        {
                            _id: "2-2",
                            title: "星球大战：幻境",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        },
                        {
                            _id: "2-3",
                            title: "中华小子",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        }
                    ]
                },
                {
                    _id: "3",
                    title: "爱情",
                    children: [
                        {
                            _id: "3-1",
                            title: "查理·布朗恋爱了",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        },
                        {
                            _id: "3-2",
                            title: "魔法俏佳人 第二季",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        },
                        {
                            _id: "3-3",
                            title: "茜茜公主",
                            children: [
                                { _id: "1-1-1" , title: "第一集" },
                                { _id: "1-1-2" , title: "第二集" },
                                { _id: "1-1-3" , title: "第三集" },
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>
```
