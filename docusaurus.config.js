const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Note Space',
  tagline: 'ENJOY BEING IN THE PROCESS OF BECOMING',
  url: 'https://AfraButera.github.io',
  baseUrl: '/my-note/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eohmw-9hxvl-001.ico',
  organizationName: 'AfraButera', // Usually your GitHub org/user name.
  projectName: 'my-note', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/AfraButera/my-note/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Note Space',
        logo: {
          alt: 'My Site Logo',
          src: 'img/noteweb.svg',
        },
        items: [
          {
            type:'dropdown',
            position:'left',
            label:'⌨️ Docker',
            items:[
              {
                to:'/docs/Docker/Docker基本指令',
                label:'Docker基本指令',
              },
            ],
          },
          {
            type:'dropdown',
            position:'left',
            label:'⌨️ Markdown Note',
            items:[
              {
                to:'/docs/Markdown Note/複製按鈕怎麼做',
                label:'複製按鈕怎麼做',
              },
            ],
          },
          {
            type:'dropdown',
            position:'left',
            label:'⌨️ ClaudeCodeLab',
            items:[
              {
                to:'/docs/ClaudeCodeLab/Telegram Bot × Google Calendar 早安通知',
                label:'Telegram Bot × Google Calendar 早安通知',
              },
            ],
          },
          {
            type:'dropdown',
            position:'left',
            label:'⌨️ PostgreSQL',
            items:[
              {
                to:'/docs/PostgreSQL/post',
                label:'post',
              },
            ],
          },
          {
            type:'dropdown',
            position:'left',
            label:'⌨️ Python',
            items:[
              {
                to:'/docs/Python/資料型別',
                label:'資料型別',
              },
              {
                to:'/docs/Python/練習筆記/零散練習',
                label:'練習｜零散題目',
              },
              {
                to:'/docs/Python/CodeShiba學習練習/if判斷式',
                label:'CodeShiba｜if 判斷式',
              },
              {
                to:'/docs/Python/CodeShiba學習練習/數學運算',
                label:'CodeShiba｜數學運算',
              },
              {
                to:'/docs/Python/CodeShiba學習練習/字串方法',
                label:'CodeShiba｜字串方法',
              },

              {
                to:'/docs/Python/練習筆記/SeriseA練習題',
                label:'練習｜Serise A 題目',
              },
              {
                to:'/docs/Python/練習筆記/基礎入門',
                label:'練習｜基礎入門',
              },
              {
                to:'/docs/Python/練習筆記/變數與字串',
                label:'練習｜變數與字串',
              },
              {
                to:'/docs/Python/練習筆記/應用小專案',
                label:'練習｜應用小專案',
              },
              {
                to:'/docs/Python/Claude教學練習紀錄/2026-04-30_L1_函式深入',
                label:'Claude教學｜L1 函式深入',
              },
              {
                to:'/docs/Python/Claude教學練習紀錄/2026-05-01_L2_迴圈進階',
                label:'Claude教學｜L2 迴圈進階',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '⌨️ Unix(類Unix)工具集 ',
            items:[
              {
                to: '/docs/UnixTools/Terminal無法用con .呼叫vscode',
                label: 'Terminal無法用con .呼叫vscode',
                
              },
              {
                to: '/docs/UnixTools/tar_tgz轉換',
                label: 'tar_tgz轉換',
              },
              {
                to: '/docs/UnixTools/p7zip加解壓',
                label: 'p7zip加解壓',
              },
              {
                to: '/docs/UnixTools/如何裝yarn',
                label: '如何裝yarn',
              },
              {
                to: '/docs/UnixTools/如何裝ping',
                label: '如何裝ping',
              },
            ],
          },
          {
            href: 'https://github.com/AfraButera',
            label: 'My GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        
            
        copyright: `Copyright © ${new Date().getFullYear()} Afra's Note Space, Inc. Built with Docusaurus.<br/><br/> <a href="https://www.stylemap.co.jp/" target="_blank" rel="noopener noreferrer"><img src="https://www.f-counter.net/j/67/1776311357/" alt="Access Counter" style="opacity: 0.8;" /></a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
