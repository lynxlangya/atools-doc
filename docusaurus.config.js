// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ATools',
  tagline: '现代 JavaScript 实用工具库 🔧',
  url: 'https://wangdaoo.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Keter', // Usually your GitHub org/user name.
  projectName: 'ATools', // Usually your repo name.

  plugins: [
    '@docusaurus/plugin-ideal-image',
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/wangdaoo/atools-doc/blob/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '7OURGM385T',
        apiKey: 'aabf3ba6f45f9402632ecbab9200f37e',
        indexName: 'atools',
        searchParameters : {},
      },
      navbar: {
        title: 'ATools',
        // hideOnScroll: true,
        logo: {
          alt: 'Logo',
          src: 'img/atools_logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: '指南',
          // },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/wangdaoo/atools/issues',
            label: '需求池',
            position: 'right',
          },
          {
            href: 'https://github.com/wangdaoo/atools',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `MIT Licensed | Copyright © ${new Date().getFullYear()} ATools, Author wangdaoo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
