export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'SERP Docs'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/serpcompany/docs.serp.co',
      'target': '_blank',
      'aria-label': 'SERP Docs Github'
    }]
  },
  footer: {
    credits: 'Copyright © 3030',
    colorMode: false,
    links: [
      // {
      // 'icon': 'i-simple-icons-nuxtdotjs',
      // 'to': 'https://nuxt.com',
      // 'target': '_blank',
      // 'aria-label': 'Nuxt Website'
      // },
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://serp.ly/@serp/discord',
        'target': '_blank',
        'aria-label': 'SERP Discord'
      }, {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/serpcompany',
        'target': '_blank',
        'aria-label': 'SERP on X'
      }, {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/serpcompany/',
        'target': '_blank',
        'aria-label': 'SERP on GitHub'
      }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/serpcompany/docs.serp.co/edit/main/content',
      links: [
        {
          label: 'Star on GitHub',
          to: 'https://github.com/nuxt/ui',
          target: '_blank'
        }, {
          label: 'SERP',
          to: 'https://serp.co',
          target: '_blank'
        }]
    }
  }
});
