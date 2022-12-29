---
title: 'Working with data in Astro'
date: '2022-12-29'
slug: 'working-with-data'
description: 'In this article, I show you how to fetch data in both Astro and framework components'
hero: '/images/astro/astro-cover.png'
---

It is important you understand how to `fetch()` and work with data within your components. In this lesson, we will learn how to `fetch()` data in both `.astro` components and Framework components (React, Vue, Svelte, etc.)

## Fetching data in Astro components

All Astro components have access to JS's global [fetc](https://developer.mozilla.org/en-US/docs/Web/API/fetch)h() function. The `fetch()` will be executed at build time, and the data returned from it will be made available in your components. Let’s see an example of how this works.

```jsx
// src/pages/blog/index.astro

---
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();
const post1 = posts[0];
---

<h1>My Blog</h1>
<h3>{post1.title}</h3>
<p>{post1.body}</p>
```

In this example, we are making a `fetch()` to an API to get a bunch of dummy post data. Notice how we can use the `await` keyword without the `async` keyword. We can then output the data returned from our API in our template below by wrapping our variables in double brackets `{}` just like in JSX.

Here is what our rendered page looks like:

![blog-page.png](/images/astro/working-with-data/blog-page.webp)

In this example, I am only rendering the first post, but what if we want to output all of the posts returned from our API? Let’s see how we can do this.

```jsx
---
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();
---

<h1>My Blog</h1>

{
  posts.map((post) => (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  ))
}
```

Like in JSX, we can [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) over the array of posts returned from our API and render them onto the page in the “template” section of our Astro component.

![all-blog-posts.png](/images/astro/working-with-data/all-blog-posts.webp)

## Fetching data in framework components

Astro allows you to [bring our own framework](https://docs.astro.build/en/core-concepts/framework-components/). This means you can use, React, Preact, Svelte, Vue, SolidJS, AlpineJS, and Lit at the time of this writing. You can even mix and match these various frameworks and output their components on the same page!

Let’s see how we can fetch data using React.

```jsx
// src/components/Posts.jsx

const response = await fetch('https://jsonplaceholder.typicode.com/posts')
const posts = await response.json()

export default function Posts() {
  return (
    <>
      {posts.map((post) => (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ))}
    </>
  )
}
```

```jsx
// src/pages/blog/index.astro

---
import Posts from "../../components/Posts.jsx";
---

<h1>My Blog</h1>

<Posts />
```

![react-posts-page.png](/images/astro/working-with-data/react-posts-page.webp)

## Wrap up

In this lesson, you learned how to fetch data in both Astro components and framework components, React, in our case.

The [official Data Fetching documentation](https://docs.astro.build/en/guides/data-fetching/) has additional examples and information you should familiarize yourself with.
