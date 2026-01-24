import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Gitux',
  description: 'A lightweight, visual Git client for developers who value speed and simplicity',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Gitux - Visual Git Made Simple' }],
    ['meta', { property: 'og:description', content: 'A lightweight, visual Git client with an intuitive commit graph, keyboard shortcuts, and voice-powered commits.' }],
    ['meta', { property: 'og:url', content: 'https://gitux.co' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Gitux',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/features/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Pricing', link: '/pricing' },
      { text: 'Download', link: '/download' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Opening a Repository', link: '/guide/opening-repo' },
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'The Commit Graph', link: '/guide/commit-graph' },
            { text: 'Staging & Committing', link: '/guide/staging-committing' },
            { text: 'Branches & Merging', link: '/guide/branches-merging' },
            { text: 'Viewing Diffs', link: '/guide/viewing-diffs' },
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Keyboard Shortcuts', link: '/guide/keyboard-shortcuts' },
            { text: 'Voice Commands', link: '/guide/voice-commands' },
            { text: 'Stashing Changes', link: '/guide/stashing' },
            { text: 'File History', link: '/guide/file-history' },
            { text: 'Reset & Force Push', link: '/guide/reset-force-push' },
          ]
        }
      ],
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'Overview', link: '/features/' },
            { text: 'Visual Commit Graph', link: '/features/commit-graph' },
            { text: 'Staging Panel', link: '/features/staging-panel' },
            { text: 'Diff Viewer', link: '/features/diff-viewer' },
            { text: 'Branch Management', link: '/features/branch-management' },
            { text: 'Voice Input', link: '/features/voice-input' },
            { text: 'Keyboard Shortcuts', link: '/features/keyboard-shortcuts' },
            { text: 'Stash Management', link: '/features/stash-management' },
            { text: 'File History', link: '/features/file-history' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gitux-co/docs' }
    ],
    footer: {
      message: 'Built for developers who love Git but hate complexity. <a href="/terms">Terms</a> · <a href="/privacy">Privacy</a>',
      copyright: `Copyright © ${new Date().getFullYear()} Gitux`
    }
  }
})
