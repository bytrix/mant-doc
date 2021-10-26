module.exports = {
    title: "Mant Design",
    base: "/mant-doc/",
    themeConfig: {
        // sidebarDepth: 3,
        displayAllHeaders: true,
        nav: [
            {
                text: "GitHub",
                link: "https://github.com/bytrix/mant-design"
            }
        ],
        sidebar: {
            '/': [
                {
                    title: '基本使用',
                    path: '/'
                },
                {
                    title: '组件',
                    path: '/components/',
                    collapsable: false,
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
                            title: 'Grid 栅格',
                            path: '/components/Grid/',
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
                            title: 'Spin 加载中',
                            path: '/components/Spin.md'
                        },
                        {
                            title: 'Tabs 标签页',
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
                            title: 'Tooltip 文字提示',
                            path: '/components/Tooltip.md'
                        },
                        {
                            title: 'Tree 树形菜单',
                            path: '/components/Tree/',
                            collapsable: false,
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