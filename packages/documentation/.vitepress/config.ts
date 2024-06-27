import type { UserConfig } from 'vitepress';
import { defineConfig } from 'vitepress';
import { nav, sidebar, vite } from './configuration';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Acronis UI Component Library',
  description: 'Vue.JS 3 components library built on a System Design',
  base: '/ui-component-library/',
  head: [['link', { rel: 'icon', href: '/ui-kit.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav,

    sidebar,

    editLink: {
      pattern: 'https://github.com/acronis/ui-component-library/edit/main/packages/documentation/:path'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/acronis/ui-component-library' }
    ],

    footer: {
      message: 'MIT Licensed',
      copyright:
          'Copyright © 2024-present Acronis UI Component Library contributors',
    }
  },
  vite
} as UserConfig);
