---
title: 'Creating dynamic routes for each post'
date: '2023-01-10'
slug: 'creating-dynamic-routes-for-each-post'
description: 'In this article, I explain how to create dynamic routes for each post in Strapi CMS within our Astro project.'
hero: '/images/astro/getting-started-with-astro.jpg'
---

Now that we can successfully get our posts from Strapi, we need to tell Astro how to create a page for each post. This is where [dynamic routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) come in.

## Slug dynamic route file

Create a new file called `[slug].astro` in `src/pages/posts`.

![slug-astro-file.png](/images/astro/creating-dynamic-routes-for-each-post/slug-astro-file.webp)

Copy and paste contents from `src/pages/posts/index.astro` into this file.

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

![copying-index-code.png](/images/astro/creating-dynamic-routes-for-each-post/copying-index-code.webp)

The reason for doing this is a lot of this code is reusable, and it will save us some time.

### getStaticPaths()

If you remember from the earlier chapter on static and dynamic routes, we need to use the [getStaticPaths()](https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode) to generate our dynamic routes.

Update the `src/pages/posts/[slug].astro` file to look like this:

```jsx
---
export async function getStaticPaths() {
  const response = await fetch("http://127.0.0.1:1337/api/posts?populate=*");
  const { data } = await response.json();

  return data.map((post) => {
    return {
      params: { slug: post.attributes.slug },
      props: { post },
    };
  });
}

const { post } = Astro.props;
---

<h1>The Blog</h1>
```

Let’s break down what is happening inside the getStaticPaths() function.

First, we are using fetch to get our posts from our API from Strapi

```jsx
const response = await fetch('http://127.0.0.1:1337/api/posts?populate=*')
```

Next, we get the data from our endpoint as a JavaScript object.

```jsx
const { data } = await response.json()
```

Finally, we use `map()` to iterate over each post and `return` a new object with a `params` and `props` property.

```jsx
return data.map((post) => {
  return {
    params: { slug: post.attributes.slug },
    props: { post },
  }
})
```

- The `params` property is an object with a `slug` property, which Astro will use to generate our routes dynamically.
- The `props` property contains all our data from each post, like the title, slug, body, and image.

The final line in the JS script section is:

```jsx
const { post } = Astro.props
```

This is getting the `post` variable from the object we return just above it.

```jsx
return data.map((post) => {
  return {
    params: { slug: post.attributes.slug },
    props: { post }, // creating the post data as a prop
  }
})

const { post } = Astro.props // accessing the post data from props
```

## Updating the template

Now we can update the template section with the following to render our post data.

```jsx
---
export async function getStaticPaths() {
  const response = await fetch("http://127.0.0.1:1337/api/posts?populate=*");
  const { data } = await response.json();

  return data.map((post) => {
    return {
      params: { slug: post.attributes.slug },
      props: { post },
    };
  });
}

const { post } = Astro.props;
---

<h2>{post.attributes.title}</h2>
<p>{post.attributes.body}</p>
<img
  src={`http://127.0.0.1:1337${post.attributes.image.data.attributes.formats.large.url}`}
  alt="alt={post.attributes.image.data.attributes.name}"
/>
```

Now open your browser to [`http://localhost:3000/posts/my-first-post`](http://localhost:3000/posts/my-first-post) or whatever the slug for one of your posts is, and you should see your post.

![post-dynamic-page.png](/images/astro/creating-dynamic-routes-for-each-post/post-dynamic-page.webp)

![my-second-post.png](/images/astro/creating-dynamic-routes-for-each-post/my-second-post.webp)

## Wrap up

In this lesson, we learned how to generate dynamic routes for each post from Strapi’s REST API.

In the next lesson, we will configure Strapi to use GraphQL and learn how to use GraphQL in Astro.
