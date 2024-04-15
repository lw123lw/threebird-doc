import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/threebird-doc/',
  title: "ThreeBird",
  description: "A VitePress Site",
  themeConfig: {
    algolia: { // algolia 搜索服务 与 内置 search 可二选一
      appId: 'LPTNA0E8HM',
      apiKey: '8f1b68dfab6b0320adef728a1c3a77cc',
      indexName: 'themusecatcher_front-end'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front/index.md' },
      { text: '后端', link: '/backend/index.md' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
       copyright: "Copyright © 2024-ThreeBird Admin"
    }
  }
})
