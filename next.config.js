const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/books',
        destination: '/posts/books',
        permanent: true,
      },
      {
        source: '/courses',
        destination: '/posts/courses',
        permanent: true,
      },
      {
        source: '/tutorials',
        destination: '/',
        permanent: true,
      },
      {
        source: '/newsletter',
        destination: 'https://www.getrevue.co/profile/howtocode_io',
        permanent: true,
      },
      {
        source: '/podcast',
        destination: 'https://anchor.fm/how-to-code',
        permanent: true,
      },
      {
        source: '/posts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/posts/astro-what-makes-astro-different-from-other-frameworks',
        destination:
          '/posts/astro/what-makes-astro-different-from-other-frameworks',
        permanent: true,
      },
      {
        source: '/posts/astro-how-to-install-astro-and-build-your-first-site',
        destination:
          '/posts/astro/how-to-install-astro-and-build-your-first-site',
        permanent: true,
      },
      {
        source: '/posts/astro-components-layouts-pages',
        destination: '/posts/astro/components-layouts-pages',
        permanent: true,
      },
    ]
  },
}

module.exports = withMarkdoc()(nextConfig)
