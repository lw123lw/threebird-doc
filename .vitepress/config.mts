import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/threebird-doc/',
  title: "ThreeBird",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/threebird-doc/logo/favicon.png' }]
  ],
  themeConfig: {
    logo: '/logo-icon.png',

    outline: {
      level: [2, 6],
      label: '页面导航'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '展示详细列表',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front/guide/page.md' },
      {
        text: '后端',
        items: [
          { text: '开发指南', link: '/backend/guide/introduce/preface.md' },
          { text: '项目专区', link: '/backend/project/modules/one.md' },
          { text: '常见问题', link: '/backend/problem/dependent/one.md' },
          { text: '更新日志', link: '/backend/changelog/2024/one.md' },
        ]
      },
      {
        text: '链接',
        items: [
          { text: 'github', link: 'https://github.com/lw123lw/threebird-doc' },
          { text: 'gitee', link: 'https://github.com/lw123lw/threebird-doc' },
        ]
      },
    ],

    sidebar: {
      '/front': [
        {
          text: '开发指南',
          collapsed: false,
          items: [
            { text: '什么是ThreeBird Admin', link: '/front/guide/page.md' },
            { text: '开始使用', link: '/front/guide/start.md' },
            { text: 'Q&A', link: '/front/guide/qa.md' }
          ]
        },
        {
          text: "组件示例",
          collapsed: false,
          items: [
            { text: "proTable(超级表格)", link: "/front/components/proTable.md" },
            { text: "proForm(超级表单)", link: "/front/components/proForm.md" },
          ],
        },
      ],

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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      copyright: "Copyright © 2024-ThreeBird Admin"
    }
  }
})
