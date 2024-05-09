import { defineConfig } from 'vitepress'

console.log("Code licensed under MIT, documentation under CC BY-SA 4.0.");
console.log("Made with ❤️️ love by Grayer.");

export default defineConfig({
  title: "Grayer 的文档站",
  description: "构建知识的海洋",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '主页', link: '/Index' },
      { text: 'Arch Linux', link: '/ArchLinux/Index' }
    ],

    sidebar: {
      '/ArchLinux/': [
        {
          text: 'Arch Linux',
          items: [
            { text: '简介与说明', link: '/ArchLinux/Index' },
            { text: '安装前的准备', link: '/ArchLinux/Pre_Install' }
            
          ]
        }
      ]
    },

    footer: {
      message:
        'Code licensed under MIT, documentation under <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh\" class=\"grabient-text\">CC BY - SA 4.0</a>.',
      copyright:
        'Made with ❤️️ love by Grayer.'
    },

    editLink: {
      pattern: 'https://github.com/Grayer0113/Grayer0113.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '最后更新于：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Grayer0113' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '8CJTY9FY1Z',
        apiKey: '9d28f75c515a96f54813f7481d3fb61a',
        indexName: 'DocWebsite',
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
        }
      }
    }
  }
})