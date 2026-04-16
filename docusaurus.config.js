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
        
            
        copyright: `Copyright © ${new Date().getFullYear()} Afra's Note Space, Inc. Built with Docusaurus.<br/><br/> <a href="https://www.stylemap.co.jp/" target="_blank" rel="noopener noreferrer"><img src="https://www.f-counter.net/j/67/1776310045/" alt="Access Counter" style="opacity: 0.8;"></a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
