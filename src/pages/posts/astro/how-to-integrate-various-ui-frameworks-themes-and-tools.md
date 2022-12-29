---
title: 'How to integrate various UI frameworks, themes, and tools'
date: '2022-12-29'
slug: 'how-to-integrate-various-ui-frameworks-themes-and-tools'
description: 'In this article, I explain how to integrate various UI frameworks, themes, and tools in your Astro projects.'
hero: '/images/astro/astro-cover.png'
---

One of the most unique and powerful features of Astro is the ability to use a [variety of different UI frameworks and tools](https://docs.astro.build/en/guides/integrations-guide/). In addition to using `.astro` components, you can also use React, Vue, Svelte, and others. You can even mix and match these various frameworks on the same page.

This kind of flexibility is incredibly powerful. For example, let’s say you like a calendar component built with Vue and a carousel component built with React. You can easily install the Vue and React integrations and use both on the same page! Of course, you must be mindful of all the JS you send down to the client.

Just because you can do something doesn’t mean you should.

## Adding a UI framework

With its automatic integration setup, Astro makes it incredibly easy to add a new UI framework to your project. Say, for example, you want to add React. Just enter the following in your terminal and press Enter.

```bash
npx astro add react
```

![npx-astro-add-react.png](/images/astro/how-to-integrate-various-ui-frameworks-themes-and-tools/npx-astro-add-react.webp)

Then press the `y` key to install all the necessary packages and dependencies. It will then ask you for permission to update the `astro.config.mjs` file and possibly the `tsconfig.json` if you are using TypeScript.

After completing everything, you are ready to use React like you usually would by creating components with either a `.jsx` or `.tsx` file extension.

### Adding Tailwind CSS

If you are like to use [Tailwind CSS](https://tailwindcss.com/) in your projects, as I do, they have a Tailwind CSS integration too.

```jsx
npx astro add tailwind
```

### Adding multiple integrations

You can also install multiple integrations at the same time, like so:

```bash
npx astro add react tailwind
```

Here is what the updated `astro.config.mjs` looks like after installing both React and Tailwind.

```jsx
// astro.config.mjs

import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
})
```

## Supported integrations

You can find out all of the integrations that Astro supports [here](https://docs.astro.build/en/guides/integrations-guide/#official-integrations).

## Themes

![astro-themes.png](/images/astro/how-to-integrate-various-ui-frameworks-themes-and-tools/astro-themes.webp)

Astro also has tons of [themes](https://astro.build/themes/) that you can use in your projects. Some are created by the official Astro team, and others by the community. Themes are a great way to build a great-looking site quickly.

Shameless plug… if you are looking for a great theme for your next blog, check out [Creek](https://astro.build/themes/details/creek/), made by yours truly 😉
