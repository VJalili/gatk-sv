const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GATK-SV',
  tagline: 'Structural Variation Discovery Pipeline',
  url: 'https://github.com',
  baseUrl: '/gatk-sv/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw', // options: 'throw', 'warn'
  favicon: 'img/favicon.ico',
  organizationName: 'Broad Institute of MIT and Harvard',
  projectName: 'gatk-sv',
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'GATK-SV',
      logo: {
        alt: 'GATK-SV Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Docs',
        },
        /** In case we're interested in having blog posts. */
        /** {to: '/blog', label: 'Blog', position: 'left'}, */
        {
          href: 'https://github.com/broadinstitute/gatk-sv/issues',
          label: 'Questions',
          position: 'right'
        },
        {
          href: 'https://github.com/broadinstitute/gatk-sv',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/broadinstitute/gatk-sv/',
        },
        /**
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/broadinstitute/gatk-sv/website/blog/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
