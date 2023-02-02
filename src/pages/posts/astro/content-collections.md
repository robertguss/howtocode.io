---
title: 'Astro 2.0: Content Collections'
date: '2023-02-02'
slug: 'content-collections'
description: 'In this tutorial we will learn how to use content collections in Astro. We will also learn how to query content collections and generate dynamic routes for each item in the collection.'
hero: '/images/astro/getting-started-with-astro.jpg'
---

# Astro content collections tutorial

This tutorial will teach you what [content collections](https://docs.astro.build/en/guides/content-collections/) are and how they work in Astro 2.0.

After creating a new Astro 2.0 project from scratch, we will create a content collection for blog posts. We will also define a [collection schema](https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema) that will validate the Frontmatter of our blog posts, making it typesafe. Finally, we will learn how to generate dynamic routes for each post in the blog content collection.

This tutorial assumes you are already familiar with how [dynamic routes work in Astro](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes). If this concept is new to you, we highly recommend you read [Astro’s official docs](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) to familiarize yourself with them. Throughout the tutorial, we will have links to various sections of the docs and external resources where you can learn more.

We’ve got a lot to cover, so let’s get started.

## What are content collections?

Content collections are one of the latest features released in Astro 2.0. They allow you to better organize your markdown and MDX content via the new `src/content` directory and provide type safety for your Frontmatter and content. You can also [query content collections](https://docs.astro.build/en/guides/content-collections/#querying-collections) to pull them into your templates and [generate routes](https://docs.astro.build/en/guides/content-collections/#generating-routes-from-content) for each piece of content.

{% callout type="note" title="" %}
This may all sound a bit abstract at the moment, but don’t worry. We will cover everything in detail throughout this tutorial, and by the end, you will be ready to create content collections in your own Astro projects.
{% /callout %}

## Creating a new Astro 2.0 project

We can create an Astro 2.0 project by entering the following into our terminal.

```bash
npm create astro@latest
```

When asked if you would like to install the latest Astro package, press `y` on your keyboard for yes.

1. Next, you will be prompted to give your project a name. I will use the name `astro-content-collections`, but you can name it whatever you want. Press Enter to continue.

![astro-project-name.png](/images/astro/content-collections/astro-project-name.webp)

{% callout type="note" title="Larger screenshots" %}
You can click on the screenshots to see larger versions.
{% /callout %}

1. Then, select “a few best practices (recommended).”

![astro-best-practices.png](/images/astro/content-collections/astro-best-practices.webp)

1. Next, press `y` to install NPM dependencies
2. Next, you are asked to initialize a new Git repository. Press `n` for no, as we won’t need it for this tutorial.
3. Finally, select “strict” for the TypeScript setup.

![ts-setup.png](/images/astro/content-collections/ts-setup.webp)

After your project has been created, `cd` into your project directory.

```bash
cd <project name>

# For example
# cd astro-content-collections
```

### Running the dev server

To start the Astro dev server, enter the following in the terminal.

```bash
npm run dev
```

The dev server will serve your app at [http://localhost:3000](http://localhost:3000). You should see the following if you open this URL in your browser.

![astro-home-page.png](/images/astro/content-collections/astro-home-page.webp)

We are ready to create our blog content collection now that we have created our project.

## Define a new collection schema

The first thing we will need to do is to create two new folders. Within the `src` folder, create a new folder called `content`. Within the `content` folder, create a new folder called `blog`. The entire file path should be `src/content/blog`.

![src-content-blog.png](/images/astro/content-collections/src-content-blog.webp)

### Creating our blog posts

Next, we will need to create some blog posts.

For demonstration purposes, these blog posts will be very simple. The most important part is the Frontmatter, as we will soon learn how to make all of the data contained in it typesafe.

`src/content/blog/post-1.md`

```markdown
---
title: Blog post 1
author: John Doe
isDraft: false
publishedDate: 02-01-2023
tags:
  - Web Development
  - JavaScript
  - Astro
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

# Blog post 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum dignissim fermentum. Nunc eget semper dui. Fusce commodo placerat dictum. Curabitur nec mauris eu mi condimentum fermentum. Donec a magna accumsan, sodales leo consequat, venenatis ligula. Vivamus a pharetra est. Nam posuere dolor sed tortor suscipit, ac feugiat magna convallis.
```

`src/content/blog/post-2.md`

```markdown
---
title: Blog post 2
author: John Doe
isDraft: false
publishedDate: 02-01-2023
tags:
  - Web Development
  - JavaScript
  - Astro
image: https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80
canonicalURL: https://localhost:3000/blog/blog-post-2
---

# Blog post 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum dignissim fermentum. Nunc eget semper dui. Fusce commodo placerat dictum. Curabitur nec mauris eu mi condimentum fermentum. Donec a magna accumsan, sodales leo consequat, venenatis ligula. Vivamus a pharetra est. Nam posuere dolor sed tortor suscipit, ac feugiat magna convallis.
```

`src/content/blog/post-3.md`

```markdown
---
title: Blog post 3
author: John Doe
isDraft: false
publishedDate: 02-01-2023
tags:
  - Web Development
  - JavaScript
  - Astro
image: https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-2
---

# Blog post 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum dignissim fermentum. Nunc eget semper dui. Fusce commodo placerat dictum. Curabitur nec mauris eu mi condimentum fermentum. Donec a magna accumsan, sodales leo consequat, venenatis ligula. Vivamus a pharetra est. Nam posuere dolor sed tortor suscipit, ac feugiat magna convallis.
```

### Defining our blog collection schema

Now that we have some blog posts, we need to [define a collection schema](https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema) for our blog content collection.

Create a file called `config.ts` inside of `src/content`.

![config-ts.png](/images/astro/content-collections/config-ts.webp)

We first need to import the [Zod validation library](https://zod.dev/) and the `defineCollection()` function from `Astro:content`.

```tsx
// src/content/config.ts

import { z, defineCollection } from 'astro:content'
```

Next, we [define the schema for the content collection](https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema) we want to validate. In our case, we need to define a schema for our blog collection.

```tsx
// src/content/config.ts

import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    isDraft: z.boolean(),
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    image: z.string().optional(),
    canonicalURL: z.string().url(),
  }),
})
```

First, we are creating a new constant called `blogCollection` and using the `defineCollection` function to define our schema.

```tsx
const blogCollection = defineCollection({
```

Next, we pass the `defineCollection` function an `object` with a `schema` property.

```tsx
schema: z.object({
    title: z.string(),
    author: z.string(),
    isDraft: z.boolean(),
    publishDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
    image: z.string().optional(),
    canonicalURL: z.string().url(),
  }),
```

The schema property is an object containing all of the Frontmatter data in our blog posts with their respective types. This is how Astro can validate and ensure our Frontmatter is typesafe!

{% callout type="note" title="Zod library" %}
The `z` object comes from the [Zod](https://zod.dev/), a TypeScript first schema validation library. Please [check out their docs](https://zod.dev/) for more info.
{% /callout %}

A couple of interesting things worth pointing out.

- `publishDate` is of type string, but we are also using the [.transform()](https://zod.dev/?id=transform) method from Zod to transform it into a [JavaScript Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
- `tags` is an array of strings denoted by `z.array(z.string())`.
- `image` is of type string and also optional. We can make any type optional by using the [.optional()](https://zod.dev/?id=optional) method.

{% callout type="note" title="Required by default" %}
By default, Zod makes everything required. You have to explicitly tell it when something is optional.
{% /callout %}

Finally, we need to export our schema from our config file. Here is the entire `src/content/config.ts` file in its entirety.

```tsx
import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    isDraft: z.boolean(),
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    image: z.string().optional(),
    canonicalURL: z.string().url(),
  }),
})

export const collections = {
  blog: blogCollection,
}
```

## Querying our blog collection

Now that we have defined our collection schema, we are ready to learn how to query our blog content collection and render its content.

Update `src/pages/index.astro` with the following code.

```tsx
---
import { getCollection } from "astro:content";
const blogPosts = await getCollection("blog");
---

{blogPosts}
```

First, we import the [getCollection](https://docs.astro.build/en/reference/api-reference/#getcollection) method from `astro:content`.

```tsx
import { getCollection } from 'astro:content'
```

Next, we `await` the [getCollection](https://docs.astro.build/en/reference/api-reference/#getcollection) method, which retrieves all the items within a given content collection. Our collection is called “blog,” so we pass the name of our collection as a string to `getCollection()`.

```tsx
const blogPosts = await getCollection('blog')
```

Finally, we render our blog posts.

```tsx
{
  blogPosts
}
```

Now if you open your browser to [http://localhost:3000](http://localhost:3000), you should see the following error.

![schema-error.png](/images/astro/content-collections/schema-error.webp)

Our schema validation is working!

The error states that `publishDate` is required, but our Frontmatter has `publishedDate`. Hopefully, you can now begin to see how powerful and useful having typesafe frontmatter is.

We can solve this by updating our `src/content/config.ts` like so.

```tsx
import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    isDraft: z.boolean(),
    publishedDate: z.string().transform((str) => new Date(str)), // updated from publishDate
    tags: z.array(z.string()),
    image: z.string().optional(),
    canonicalURL: z.string().url(),
  }),
})

export const collections = {
  blog: blogCollection,
}
```

Now if you visit [http://localhost:3000](http://localhost:3000), you should see the following.

![object-object.png](/images/astro/content-collections/object-object.webp)

We can render our blog post content properly by updating `src/pages/index.astro` with the following.

```tsx
---
import { getCollection } from "astro:content";
const blogPosts = await getCollection("blog");
---

{
	blogPosts.map((post) => (
		<h2>
			<a href={`/blog/${post.slug}`}>{post.data.title}</a>
		</h2>
	))
}
```

We use [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to iterate over each post inside our blog content collection to create a link for each blog post title.

![blog-posts-title-links.png](/images/astro/content-collections/blog-posts-title-links.webp)

If you try and click on one of the titles, you will get a 404 error page.

![404.png](/images/astro/content-collections/404.webp)

This is happening because we have not told Astro how to create dynamic routes for each of our blog posts.

Let’s do that now!

## Dynamic routes from content collections

Now that we have our blog posts on the home page, we need to tell Astro how to generate a route for every post with [dynamic routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes).

{% callout type="warning" title="Dynamic routes" %}
If you are unfamiliar with how dynamic routes work in Astro, please check read the docs: [https://docs.astro.build/en/core-concepts/routing/#dynamic-routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
{% /callout %}

First, create a folder called `blog` inside of the `src/pages` directory. Inside the newly created `blog` folder, create a file called `[slug].astro`.

![slug-astro-file.png](/images/astro/content-collections/slug-astro-file.webp)

Paste the following.

```tsx
---
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Content />
```

First, we are importing the `getCollection` function from `astro:content`. We learned about this function in the previous section, where we learned how to query for our blog collection content.

```tsx
import { getCollection } from 'astro:content'
```

Next, we are exporting an async function called [getStaticPaths()](https://docs.astro.build/en/reference/api-reference/#getstaticpaths) which Astro provides. This function is what Astro uses to generate dynamic routes.

```tsx
export async function getStaticPaths() {}
```

Inside `getStaticPaths()`, we `await` the `getCollection()` function, which returns all of the posts from the blog content collection.

```tsx
export async function getStaticPaths() {
  const blogEntries = await getCollection('blog')
}
```

Then, we use [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to iterate over the blog posts, returning an object with two properties.

1. The first is a `params` property which contains the slug of our blog post. Astro expects the slug from each post since we named this file `[slug].astro`.
   1. By default, Astro will use the file name of each post for the slug, which in our case is `post-1`, `post-2`, and `post-3`.
2. The second property, `props`, returns each blog post's content.

```tsx
export async function getStaticPaths() {
  const blogEntries = await getCollection('blog')
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }))
}
```

Finally, we get the data returned from the `getStaticPaths()` function and render the blog content using a special [Content component](https://docs.astro.build/en/guides/markdown-content/#the-content-component) provided by Astro.

```tsx
const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Content />
```

Now if you visit [http://localhost:3000](http://localhost:3000) and click on one of the blog post titles, you should see the post’s content.

![blog-post-1.png](/images/astro/content-collections/blog-post-1.webp)

## Wrap up

We covered a lot of material in this tutorial, so let’s quickly recap everything you learned.

1. First, you learned what content collections are.
2. Next, you learned how to create a new Astro 2.0 project.
3. Then, you learned how to define a collection schema.
4. Then, you learned how to query the blog content collection to render each blog post onto the home page.
5. Finally, you learned how to create dynamic routes for each blog post within the blog content collection.
