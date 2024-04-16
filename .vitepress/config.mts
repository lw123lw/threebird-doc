import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/threebird-doc/',
  title: "ThreeBird",
  description: "A VitePress Site",
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: './logo/favicon.png' }]
  ],
  themeConfig: {
    logo: '/logo-icon.png',

    search: {
      provider: 'local'
    },

    // algolia: { // algolia 搜索服务 与 内置 search 可二选一
    //   appId: 'LPTNA0E8HM',
    //   apiKey: '8f1b68dfab6b0320adef728a1c3a77cc',
    //   indexName: 'themusecatcher_front-end'
    // },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front/index.md' },
      {
        text: '后端',
        items: [
          { text: '开发指南', link: '/backend/guide/introduce/preface.md' },
          { text: '模块专区', link: '/backend/modules/index.md' },
          { text: '常见问题', link: '/backend/modules/index.md' },
          { text: '更新日志', link: '/backend/modules/index.md' },
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
      '/front/': [
        {
          text: '开始',
          collapsed: false,
          items: [
            { text: '什么是ThreeBird Admin', link: '/markdown-examples' },
            { text: '怎么使用', link: '/api-examples' }
          ]
        },
        {
          text: "组件",
          collapsed: false,
          items: [
            { text: "前言", link: "/guide/intro/index.html" },
            { text: "头部搜索栏", link: "/guide/intro/penk-search" },
            { text: "表格栏", link: "/guide/intro/penk-table" },
            { text: "分页栏", link: "/guide/intro/penk-footer" },
            { text: "Form表单栏", link: "/guide/intro/penk-form" },
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
            { text: "提交规范", link: "/backend/guide/standard/submitSpecification.md" }
          ],
        },
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
