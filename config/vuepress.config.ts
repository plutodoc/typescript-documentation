import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'TypeScript',
      description: 'JavaScript with syntax for types',
    },
  },
  theme: defaultTheme({
    docsDir: 'docs',
    logo: '/images/logo.png',
    locales: {
      '/': {
        contributors: false,
        repoLabel: 'Source Code',
        repo: 'https://github.com/microsoft/TypeScript',
        editLink: false,
        navbar: [
          {
            text: 'Documentation',
            link: '/documentation/get-started/typescript-from-scratch.md',
          },
          {
            text: 'v4.7.x',
            children: [
              {
                text: 'Changelog',
                link: 'https://github.com/microsoft/TypeScript/releases',
              },
            ],
          },
        ],
        sidebar: {
          '/documentation/': [
            {
              text: '1 Get Started',
              collapsible: true,
              children: [
                '/documentation/get-started/typescript-from-scratch.md',
                '/documentation/get-started/typescript-in-5-minutes.md',
                '/documentation/get-started/typescript-in-5-minutes-oop.md',
                '/documentation/get-started/typescript-in-5-minutes-func.md',
                '/documentation/get-started/typescript-tooling-in-5-minutes.md',
              ],
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [],
});
