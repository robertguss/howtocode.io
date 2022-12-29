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
      {
        source: '/posts/nextjs-install-and-overview',
        destination: '/posts/next-js/nextjs-install-and-overview',
        permanent: true,
      },
      {
        source: '/posts/nextjs-pages-and-pre-rendering',
        destination: '/posts/next-js/nextjs-pages-and-pre-rendering',
        permanent: true,
      },
      {
        source: '/posts/nextjs-api-routes',
        destination: '/posts/next-js/nextjs-api-routes',
        permanent: true,
      },
      {
        source: '/posts/go-basics-1-installing-go-on-a-mac',
        destination: '/posts/go/go-basics-1-installing-go-on-a-mac',
        permanent: true,
      },
      {
        source: '/posts/go-basics-2-variables-in-go',
        destination: '/posts/go/go-basics-2-variables-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-3-primitives-in-go',
        destination: '/posts/go/go-basics-3-primitives-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-4-constants-in-go',
        destination: '/posts/go/go-basics-4-constants-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-5-arrays-and-slices-in-go',
        destination: '/posts/go/go-basics-5-arrays-and-slices-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-6-maps-in-go',
        destination: '/posts/go/go-basics-6-maps-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-7-structs-in-go',
        destination: '/posts/go/go-basics-7-structs-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-8-control-flow-in-go',
        destination: '/posts/go/go-basics-8-control-flow-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-9-loops-in-go',
        destination: '/posts/go/go-basics-9-loops-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-10-pointers-in-go',
        destination: '/posts/go/go-basics-10-pointers-in-go',
        permanent: true,
      },
      {
        source: '/posts/go-basics-11-functions-in-go',
        destination: '/posts/go/go-basics-11-functions-in-go',
        permanent: true,
      },
      {
        source: '/posts/elixir-basics-basic-data-types',
        destination: '/posts/elixir/elixir-basics-basic-data-types',
        permanent: true,
      },
      {
        source: '/posts/elixir-basics-lists',
        destination: '/posts/elixir/elixir-basics-lists',
        permanent: true,
      },
      {
        source: '/posts/elixir-basics-tuples',
        destination: '/posts/elixir/elixir-basics-tuples',
        permanent: true,
      },
      {
        source: '/posts/elixir-basics-keyword-lists',
        destination: '/posts/elixir/elixir-basics-keyword-lists',
        permanent: true,
      },
      {
        source: '/posts/elixir-basics-maps',
        destination: '/posts/elixir/elixir-basics-maps',
        permanent: true,
      },
      {
        source: '/posts/cypress-environment-variables',
        destination: '/posts/cypress/cypress-environment-variables',
        permanent: true,
      },
      {
        source: '/posts/real-world-testing-with-cypress',
        destination: '/posts/cypress/real-world-testing-with-cypress',
        permanent: true,
      },
      {
        source: '/posts/cypress-real-world-app',
        destination: '/posts/cypress/cypress-real-world-app',
        permanent: true,
      },
      {
        source: '/posts/how-to-setup-algolia-doc-search',
        destination: '/posts/algolia/how-to-setup-algolia-doc-search',
        permanent: true,
      },
      {
        source: '/posts/how-to-create-developer-screencasts-with-keynote',
        destination:
          '/posts/developer-experience/how-to-create-developer-screencasts-with-keynote',
        permanent: true,
      },
      {
        source: '/posts/what-is-zettelkasten',
        destination: '/posts/writing-pkm/what-is-zettelkasten',
        permanent: true,
      },
      {
        source: '/posts/why-writing-is-important-for-software-developers',
        destination:
          '/posts/writing-pkm/why-writing-is-important-for-software-developers',
        permanent: true,
      },
      {
        source: '/posts/jamstack-eleventy-memberstack',
        destination: '/posts/jamstack/eleventy-memberstack',
        permanent: true,
      },
      {
        source: '/posts/jamstack-gatsby-stripe-ecommerce',
        destination: '/posts/jamstack/gatsby-stripe-ecommerce',
        permanent: true,
      },
      {
        source: '/posts/jamstack-hugo-netlify-zapier',
        destination: '/posts/jamstack/hugo-netlify-zapier',
        permanent: true,
      },
      {
        source: '/posts/adonis-js-1-intro-and-setup',
        destination: '/posts/adonis-js/adonis-js-1-intro-and-setup',
        permanent: true,
      },
      {
        source: '/posts/adonis-js-2-routes-layouts',
        destination: '/posts/adonis-js/adonis-js-2-routes-layouts',
        permanent: true,
      },
      {
        source: '/posts/adonis-js-3-migrations-models',
        destination: '/posts/adonis-js/adonis-js-3-migrations-models',
        permanent: true,
      },
      {
        source: '/posts/adonis-js-4-seeds-factories',
        destination: '/posts/adonis-js/adonis-js-4-seeds-factories',
        permanent: true,
      },
      {
        source: '/posts/adonis-js-5-user-authentication',
        destination: '/posts/adonis-js/adonis-js-5-user-authentication',
        permanent: true,
      },
      {
        source: '/posts/tailwind-css-travel-site-1-installing-tailwind-css',
        destination:
          '/posts/tailwind-css/travel-site-1-installing-tailwind-css',
        permanent: true,
      },
      {
        source: '/posts/tailwind-css-travel-site-2-navigation-and-hero',
        destination: '/posts/tailwind-css/travel-site-2-navigation-and-hero',
        permanent: true,
      },
      {
        source: '/posts/tailwind-css-travel-site-3-quote-form',
        destination: '/posts/tailwind-css/travel-site-3-quote-form',
        permanent: true,
      },
      {
        source: '/posts/tailwind-css-travel-site-4-popular-destinations',
        destination: '/posts/tailwind-css/travel-site-4-popular-destinations',
        permanent: true,
      },
      {
        source: '/posts/tailwind-css-travel-site-5-features-section',
        destination: '/posts/tailwind-css/travel-site-5-features-section',
        permanent: true,
      },
      {
        source: '/posts/tailwind-css-travel-site-6-callouts-section',
        destination: '/posts/tailwind-css/travel-site-6-callouts-section',
        permanent: true,
      },
      {
        source: '/posts/tailwind-css-travel-site-7-testimonial-section',
        destination: '/posts/tailwind-css/travel-site-7-testimonial-section',
        permanent: true,
      },
      {
        source: '/posts/tailwind-css-travel-site-8-footer-purgecss',
        destination: '/posts/tailwind-css/travel-site-8-footer-purgecss',
        permanent: true,
      },
      {
        source: '/posts/how-to-deploy-statamic-3-to-digitalocean-app-platform',
        destination:
          '/posts/statamic/how-to-deploy-statamic-3-to-digitalocean-app-platform',
        permanent: true,
      },
      {
        source: '/posts/how-to-customize-your-sitemap-in-hugo',
        destination: '/posts/hugo/how-to-customize-your-sitemap-in-hugo',
        permanent: true,
      },
      {
        source: '/posts/understanding-closures-in-javascript',
        destination: '/posts/javascript/understanding-closures-in-javascript',
        permanent: true,
      },
      {
        source: '/posts/looping-through-objects-in-javascript',
        destination: '/posts/javascript/looping-through-objects-in-javascript',
        permanent: true,
      },
      {
        source: '/posts/understanding-hoisting-in-javascript',
        destination: '/posts/javascript/understanding-hoisting-in-javascript',
        permanent: true,
      },
      {
        source: '/posts/how-to-console-log-better-in-javascript',
        destination:
          '/posts/javascript/how-to-console-log-better-in-javascript',
        permanent: true,
      },
      {
        source: '/posts/how-to-compare-dates-in-javascript',
        destination: '/posts/javascript/how-to-compare-dates-in-javascript',
        permanent: true,
      },
      {
        source: '/posts/understanding-map-filter-and-reduce-in-javascript',
        destination:
          '/posts/javascript/understanding-map-filter-and-reduce-in-javascript',
        permanent: true,
      },
    ]
  },
}

module.exports = withMarkdoc()(nextConfig)
