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
      {
        source: '/posts/how-i-taught-myself-how-to-code',
        destination:
          '/posts/the-self-taught-developer/how-i-taught-myself-how-to-code',
        permanent: true,
      },
      {
        source: '/posts/how-to-become-a-front-end-developer',
        destination:
          '/posts/the-self-taught-developer/how-to-become-a-front-end-developer',
        permanent: true,
      },
      {
        source: '/posts/how-to-become-a-back-end-developer',
        destination:
          '/posts/the-self-taught-developer/how-to-become-a-back-end-developer',
        permanent: true,
      },
      {
        source: '/posts/how-to-get-experience-as-a-new-developer',
        destination:
          '/posts/the-self-taught-developer/how-to-get-experience-as-a-new-developer',
        permanent: true,
      },
      {
        source:
          '/posts/how-to-manage-your-expectations-while-teaching-yourself-how-to-code',
        destination:
          '/posts/the-self-taught-developer/how-to-manage-your-expectations-while-teaching-yourself-how-to-code',
        permanent: true,
      },
    ]
  },
}

module.exports = withMarkdoc()(nextConfig)
