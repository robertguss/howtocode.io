---
title: 'Rendering the blog posts from Strapi'
date: '2023-01-10'
slug: 'rendering-the-blog-posts-from-strapi'
description: 'In this article, I explain how to render our blog posts from Strapi CMS to use withing our Astro project.'
hero: '/images/astro/getting-started-with-astro.jpg'
---

In this lesson, we will learn how to fetch our posts from Strapi and render them in Astro.

Currently, the file `src/pages/posts/index.astro` looks like the following:

```jsx
---
const posts = await Astro.glob("./*.mdx");
---

<h1>The Blog</h1>

<ul>
  {
    posts.map((post) => (
      <li>
        <a href={post.url}>{post.frontmatter.title}</a>
      </li>
    ))
  }
</ul>
```

We are importing our local MDX files and rendering them on the page. We need to update this page component to fetch our posts from the Strapi REST API.

## Fetching our posts

Update `src/pages/posts/index.astro` with the following:

```jsx
---
const response = await fetch("http://127.0.0.1:1337/api/posts");
const { data } = await response.json();
---

<h1>The Blog</h1>
```

<aside>
💡 Notice how we are using 127.0.0.1 in the URL instead of localhost. When using localhost, I got an error from Strapi, but using 127.0.0.1 fixed the error.

</aside>

Let’s console.log the `data` variable and ensure we are getting our post data.

```jsx
---
const response = await fetch("http://127.0.0.1:1337/api/posts?populate=*");
const { data } = await response.json();
console.log(data);
---

<h1>The Blog</h1>
```

You will need to refresh the page to run this code again. When you do, you should see the post data output in your terminal.

![posts-data-in-terminal.png](/images/astro/rendering-the-blog-posts-from-strapi/posts-data-in-terminal.webp)

Now we can `map()` over this data and output the data in our template.

```jsx
---
const response = await fetch("http://127.0.0.1:1337/api/posts");
const { data } = await response.json();
---

<h1>The Blog</h1>

{
  data.map((post) => (
    <>
      <h2>{post.attributes.title}</h2>
      <p>{post.attributes.body}</p>
    </>
  ))
}
```

Our `/posts` should look like this:

![posts-page.png](/images/astro/rendering-the-blog-posts-from-strapi/posts-page.webp)

## Images missing from the response

If you look more closely at the Post data JSON coming back from our API, you will notice that there are no images in the response.

![post-json-response.png](/images/astro/rendering-the-blog-posts-from-strapi/post-json-response.webp)

This is because, by default, Strapi does not include media to keep the response payloads as small and fast as possible. We have to request them explicitly. You can learn more about this in Strapi’s docs [here](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/populate.html#basic-populating).

We can do this easily by updating the URL of our endpoint.

Open your browser to [`http://localhost:1337/api/posts?populate=*`](http://localhost:1337/api/posts?populate=*), and you will see the images in the response.

![images-in-json-response.png](/images/astro/rendering-the-blog-posts-from-strapi/images-in-json-response.webp)

Now let’s update the URL in Astro and render out the images.

## Rendering the Images

First, let’s update the URL in our fetch.

```jsx
const response = await fetch('http://127.0.0.1:1337/api/posts?populate=*')
```

Then we can render the image like so:

```jsx
{
  data.map((post) => (
    <>
      <h2>{post.attributes.title}</h2>
      <p>{post.attributes.body}</p>
      <img
        src={`http://127.0.0.1:1337${post.attributes.image.data.attributes.formats.large.url}`}
        alt={post.attributes.image.data.attributes.name}
      />
    </>
  ))
}
```

This is what the entire file looks like:

```jsx
// src/pages/posts/index.astro

---
const response = await fetch("http://127.0.0.1:1337/api/posts?populate=*");
const { data } = await response.json();
---

<h1>The Blog</h1>

{
  data.map((post) => (
    <>
      <h2>{post.attributes.title}</h2>
      <p>{post.attributes.body}</p>
      <img
        src={`http://127.0.0.1:1337${post.attributes.image.data.attributes.formats.large.url}`}
        alt={post.attributes.image.data.attributes.name}
      />
    </>
  ))
}
```

![images-in-posts-page.png](/images/astro/rendering-the-blog-posts-from-strapi/images-in-posts-page.webp)

## Wrap up

In this lesson, we learned how to fetch our posts from Strapi and render them in Astro.

The next lesson will teach us how to create dynamic routes for each post.
