export default {
    '/backend/guide': [
        {
            text: '介绍',
            collapsed: false,
            items: [
                { text: '前言', link: '/backend/guide/introduce/preface.md' },
                { text: '快速上手', link: '/backend/guide/introduce/quickStart.md' }
            ]
        },
        {
            text: "开发规范",
            collapsed: false,
            items: [
                { text: "提交规范", link: "/backend/guide/standard/submitSpecification.md" },
                { text: "代码规范", link: "/backend/guide/standard/代码规范.md" }
            ],
        },
    ],
    '/backend/project': [
        {
            text: "平台组件",
            collapsed: false,
            items: [
                { text: "核心组件", link: "/backend/project/modules/one.md" }
            ],
        },
    ],
    '/backend/problem': [
        {
            text: '开发问题',
            collapsed: false,
            items: [
                { text: '版本依赖', link: '/backend/problem/dependent/one.md' }
            ]
        }
    ],
    '/backend/changelog': [
        {
            text: '2024',
            collapsed: false,
            items: [
                { text: 'v1.01', link: 'backend/changelog/2024/one.md' }
            ]
        }
    ]
}