---
title: 'Static & dynamic routes'
date: '2023-01-10'
slug: 'static-and-dynamic-routes'
description: 'In this article, I explain how static and dynamic routes work in Astro'
hero: '/images/astro/getting-started-with-astro.jpg'
---

# Static & Dynamic Routes

As mentioned earlier, Astro uses “file-based routing” to generate URLs and pages. Astro will make a page for any file added to the `src/pages` directory. As we have seen, the file can be a `.astro` component, a `.md` markdown file, a `.mdx` MDX file, etc.

These are what are known as [static routes](https://docs.astro.build/en/core-concepts/routing/#static-routes).

## Static routes

When a file is placed in the `src/pages` directory, Astro will automatically create a route and URL for it. For example, creating a file called `src/pages/about.astro` will create a page at the `/about` URL.

![about-astro-page.png](/images/astro/static-and-dynamic-routes/about-astro-page.webp)

![about-page.png](/images/astro/static-and-dynamic-routes/about-page.webp)

Again this can be either a `.astro` component or a `.md` or `.mdx` file.

![about-md-page.png](/images/astro/static-and-dynamic-routes/about-md-page.webp)

![about-page.png](/images/astro/static-and-dynamic-routes/about-page.webp)

## Dynamic Routes

Dynamic routes allow you to generate pages and URLs dynamically. So what exactly does this mean?

Let’s say, for example, you are creating a blog and using a headless CMS to create and manage your posts. There needs to be a way for Astro to generate a page for each blog post based upon some unique identifier. Typically, in the case of blog posts, you will use a “slugified” version of the post title, which means the title in all lowercase, separated by hyphens.

For example, if your blog post is titled, “Scope and closures in JavaScript” the “slugified” version would be, “scope-and-closures-in-javascript” which you would expect to find at a URL like `/post/scope-and-closures-in-javascript`

By using dynamic routes, we can use the slug, i.e., `scope-and-closures-in-javascript` to generate a page for every post.

Let’s look at an example:

First, we will need to let Astro know that we need a dynamic route, by using a special syntax for our file. By wrapping the file name in square brackets, `[]` Astro knows that this file creates dynamic routes. In the case of our blog posts, the file we will create is, `src/pages/[slug].astro`

![slug-astro-filetree.png](/images/astro/static-and-dynamic-routes/slug-astro-filetree.webp)

We are naming our file `[slug].astro` because the `slug` property from our posts is the parameter we will use to dynamically generate our pages. If you wanted to generate pages based upon an unique `id`, the file would be called `[id].astro`.

This may seem a bit confusing initially, but it will make more sense as we generate some dynamic routes in the hands-on project later. Remember, whatever parameter you are using to generate your dynamic routes with needs to be used as the name for this file.

Inside of the `[slug].astro` file we will need to use a special function called `getStaticPaths()`. This special function, provided by Astro, is what will be called to generate all of the routes and pages for each of our posts. Keep in mind that `getStaticPaths()` is used for static site generation or SSG mode, which is not the case if you are using Astro in server-side rendered or SSR mode.

Check out their official docs on [Static SSG mode](https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode) vs [Server SSR mode](https://docs.astro.build/en/core-concepts/routing/#server-ssr-mode).

Back to our blog example, let’s see how to utilize the `getStaticPaths()` function in our `[slug].astro` file to generate our dynamic routes.

I am going to show you the entire file, and then explain what each line is doing.

```jsx
// src/pages/post/[slug].astro

---
export async function getStaticPaths() {
  const response = await fetch('http://localhost/api/posts')
  const { data } = await response.json()

  return data.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post },
    };
  });
}

const { post } = Astro.props;
---
<h2>{post.title}</h2>
<p>{post.body}</p>
<img src={post.image} alt="">
```

First, we export an async function called `getStaticPaths()`

```jsx
export async function getStaticPaths() {
```

Next, we are using [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make an HTTP request to our headless CMS to `GET` all of our posts.

```jsx
const response = await fetch('http://localhost/api/posts')
```

Then, we are using [response.json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) to return our posts as a JavaScript object.

```jsx
const { data } = await response.json()
```

Then, we are using [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to iterate over each post.

```jsx
return data.map((post) => {
  return {
    params: { slug: post.slug },
    props: { post },
  }
})
```

Inside of our `map()` we return an object with a `params` and `props` property.

```jsx
return {
  params: { slug: post.slug },
  props: { post },
}
```

- The `params` property is an object with a `slug` property where the value is the slug from our post, i.e., “scope-and-closures-in-javascript.”
- The props property is all of the post data, like the title, body, image, etc. This is what we will use to render the title, body, and image of our post. We set it as a props property in order to use it in our template below.

Next, we have:

```jsx
const { post } = Astro.props
```

We are using [JS object destructing](https://www.javascripttutorial.net/es6/javascript-object-destructuring/) to grab the `post` prop. This contains all of our post data which we created just above this line inside of:

```jsx
return data.map((post) => {
  return {
    params: { slug: post.slug },
    props: { post }, // post data as a prop
  }
})
```

Finally, we have our template to render the post data

```markup
<h2>{post.title}</h2>
<p>{post.body}</p>
<img src={post.image} alt="">
```

Here is the entire `src/pages/post/[slug].astro` file again:

```jsx
// src/pages/post/[slug].astro

---
export async function getStaticPaths() {
  const response = await fetch('http://localhost/api/posts')
  const { data } = await response.json()

  return data.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post },
    };
  });
}

const { post } = Astro.props;
---
<h2>{post.title}</h2>
<p>{post.body}</p>
<img src={post.image} alt="">
```

Astro will then create a route/page for every blog post using the `slug` property from each post.

Again, this may seem a bit confusing at first, but you will get plenty of hands-on experience using dynamic routes later in the project.

## Pagination and other features

Astro supports pagination out of the box for dynamic routes as well. You can learn more about [pagination in their official docs](https://docs.astro.build/en/core-concepts/routing/#pagination).

## Wrap up

In this lesson, you learned the difference between static and dynamic routes. You then saw an example of generating dynamic routes using some blog posts’ `slug` property.

While dynamic routes are confusing at first, they will become more clear as you get hands on experience in the upcoming project.
