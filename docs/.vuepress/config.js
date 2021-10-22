module.exports = {
    title: "Mant Design",
    themeConfig: {
        // sidebarDepth: 3,
        sidebar: {
            '/': [
                {
                    title: '基本使用',
                    path: '/intro/'
                },
                {
                    title: '组件',
                    path: '/components/',
                    collapse: true,
                    children: [
                        {
                            title: 'Button 按钮',
                            path: '/components/Button/'
                        },
                        {
                            title: 'Card 卡片',
                            path: '/components/Card/'
                        },
                        {
                            title: 'Checkbox 复选框',
                            path: '/components/Checkbox/'
                        },
                        {
                            title: 'Col 列',
                            path: '/components/Col.md'
                        },
                        {
                            title: 'Dropdown 下拉菜单',
                            path: '/components/Dropdown.md'
                        },
                        {
                            title: 'EditableModal 可编辑模态框',
                            path: '/components/EditableModal.md'
                        },
                        {
                            title: 'Icon 图标',
                            path: '/components/Icon.md'
                        },
                        {
                            title: 'Input 输入框',
                            path: '/components/Input.md'
                        },
                        {
                            title: 'Modal 模态框',
                            path: '/components/Modal/'
                        },
                        {
                            title: 'Row 行',
                            path: '/components/Row.md'
                        },
                        {
                            title: 'Spin',
                            path: '/components/Spin.md'
                        },
                        {
                            title: 'Tabs',
                            path: '/components/Tabs.md'
                        },
                        {
                            title: 'Tag 标签',
                            path: '/components/Tag.md'
                        },
                        {
                            title: 'Text 文本',
                            path: '/components/Text.md'
                        },
                        {
                            title: 'Tree 树形菜单',
                            path: '/components/Tree/',
                            children: [
                                {
                                    title: '菜单项右侧展示',
                                    path: '/components/Tree/right.md'
                                },
                                {
                                    title: '可拖拽菜单项',
                                    path: '/components/Tree/draggable.md'
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    },
    plugins: ['demo-container']
}