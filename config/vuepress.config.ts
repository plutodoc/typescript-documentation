import { pwaPlugin } from '@vuepress/plugin-pwa';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/pwa/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/pwa/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/pwa/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#126CBB',
      },
    ],
  ],
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
            {
              text: '2 Handbook',
              collapsible: true,
              children: [
                '/documentation/handbook/intro.md',
                '/documentation/handbook/basic-types.md',
                '/documentation/handbook/everyday-types.md',
                '/documentation/handbook/narrowing.md',
                '/documentation/handbook/functions.md',
                '/documentation/handbook/objects.md',
                '/documentation/handbook/types-from-types.md',
                '/documentation/handbook/generics.md',
                '/documentation/handbook/keyof-types.md',
                '/documentation/handbook/typeof-types.md',
                '/documentation/handbook/indexed-access-types.md',
                '/documentation/handbook/conditional-types.md',
                '/documentation/handbook/mapped-types.md',
                '/documentation/handbook/template-literal-types.md',
                '/documentation/handbook/classes.md',
                '/documentation/handbook/modules.md',
              ],
            },
            {
              text: '3 Reference',
              collapsible: true,
              children: [
                '/documentation/reference/utility-types.md',
                '/documentation/reference/cheatsheets.md',
                '/documentation/reference/decorators.md',
                '/documentation/reference/declaration-merging.md',
                '/documentation/reference/enums.md',
                '/documentation/reference/iterators-and-generators.md',
                '/documentation/reference/jsx.md',
                '/documentation/reference/mixins.md',
                '/documentation/reference/modules.md',
                '/documentation/reference/module-resolution.md',
                '/documentation/reference/namespaces.md',
                '/documentation/reference/namespaces-and-modules.md',
                '/documentation/reference/symbols.md',
                '/documentation/reference/triple-slash-directives.md',
                '/documentation/reference/type-compatibility.md',
                '/documentation/reference/type-inference.md',
                '/documentation/reference/variable-declarations.md',
              ],
            },
            {
              text: '4 Declaration Reference',
              collapsible: true,
              children: [
                '/documentation/declaration-files/introduction.md',
                '/documentation/declaration-files/by-example.md',
                '/documentation/declaration-files/library-structures.md',
                '/documentation/declaration-files/module-d-ts.md',
                '/documentation/declaration-files/module-plugin-d-ts.md',
                '/documentation/declaration-files/module-class-d-ts.md',
                '/documentation/declaration-files/module-function-d-ts.md',
                '/documentation/declaration-files/global-d-ts.md',
                '/documentation/declaration-files/global-modifying-module-d-ts.md',
                '/documentation/declaration-files/do-s-and-don-ts.md',
                '/documentation/declaration-files/deep-dive.md',
                '/documentation/declaration-files/publishing.md',
                '/documentation/declaration-files/consumption.md',
              ],
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
});
