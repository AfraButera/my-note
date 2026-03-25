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
            type: 'dropdown',
            position: 'left',
            label: '💻 Unix(類Unix)工具集 ',
            items:[
              {
                to: '/docs/UnixTools/p7zip加解壓',
                label: 'p7zip加解壓',
                to: '/docs/UnixTools/tar_tgz',
                label: 'tar跟tgz轉換',
             
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
        
            
        copyright: `Copyright © ${new Date().getFullYear()} Note Space, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
