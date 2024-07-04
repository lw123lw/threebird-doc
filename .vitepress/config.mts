import { defineConfig } from 'vitepress'
import { sidebarConfig } from "./config/sidebar/sidebarConfig";

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

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

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
      { text: '后端', link: '/backend/guide/preface.md' },
      {
        text: '链接',
        items: [
          { text: 'github', link: 'https://github.com/lw123lw/threebird-doc' },
          { text: 'gitee', link: 'https://github.com/lw123lw/threebird-doc' },
        ]
      },
    ],

    sidebar: sidebarConfig,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      copyright: "Copyright © 2024-ThreeBird Admin"
    }
  }
})
