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
                            title: 'Button',
                            path: '/components/Button/'
                        },
                        {
                            title: 'Card',
                            path: '/components/Card/'
                        },
                        {
                            title: 'Checkbox',
                            path: '/components/Checkbox/'
                        },
                        {
                            title: 'Col',
                            path: '/components/Col.md'
                        },
                        {
                            title: 'Dropdown',
                            path: '/components/Dropdown.md'
                        },
                        {
                            title: 'EditableModal',
                            path: '/components/EditableModal.md'
                        },
                        {
                            title: 'Icon',
                            path: '/components/Icon.md'
                        },
                        {
                            title: 'Input',
                            path: '/components/Input.md'
                        },
                        {
                            title: 'Modal',
                            path: '/components/Modal/'
                        },
                        {
                            title: 'Row',
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
                            title: 'Tag',
                            path: '/components/Tag.md'
                        },
                        {
                            title: 'Text',
                            path: '/components/Text.md'
                        },
                        {
                            title: 'Tree',
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