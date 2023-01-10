---
title: 'Using GraphQL in Strapi and Astro'
date: '2023-01-10'
slug: 'using-graphql-in-strapi-and-astro'
description: 'In this article, I explain how to use GraphQL in Strapi CMS and Astro.'
hero: '/images/astro/getting-started-with-astro.jpg'
---

In this lesson, we will learn how to set up Strapi with GraphQL to use GraphQL inside our Astro project.

## Installing GraphQL in Strapi

The first thing we need to do is install the [GraphQL plugin](https://docs.strapi.io/developer-docs/latest/plugins/graphql.html) for Strapi.

```bash
npm run strapi install graphql
```

Once the installation is complete, run the Strapi development server.

```bash
npm run strapi develop
```

Open your browser to [`http://localhost:1337/graphql`](http://localhost:1337/graphql), and you should see the GraphQL playground.

<aside>
💡 The playground may have a dark theme for you. I changed it to make things easier to read in the screenshots.

</aside>

![graphql-playground.png](/images/astro/using-graphql-in-strapi-and-astro/graphql-playground.webp)

## Writing our GraphQL query

The GraphQL playground allows us to experiment with writing our GraphQL queries to get the data we need. We want to get back the same data as we are currently getting from the REST API: the post `title`, `slug`, `body`, and `image`.

The [Strapi GraphQL docs](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html) provide useful examples of working with GraphQL and Strapi.

The first thing we will want to enter into the playground is the `query` object like so.

```graphql
# Write your query or mutation here
query {

}
```

As you start typing, the playground will have some “IntelliSense” and try to help you identify what objects are available.

![query-intellisense.png](/images/astro/using-graphql-in-strapi-and-astro/query-intellisense.webp)

This is incredibly useful as we start to go deeper and deeper into nested objects and data.

<aside>
💡 It can also be helpful to reference the JSON API response [`http://127.0.0.1:1337/api/posts?populate=*`](http://127.0.0.1:1337/api/posts?populate=*)to see how the data is structured. Open it in a new browser tab to reference it as we write our GraphQL query.

</aside>

Next we want to get data from the `posts` collection type like this.

```graphql
# Write your query or mutation here
query {
  posts {

  }
}
```

Then we can get all the post titles with this query:

```graphql
# Write your query or mutation here
query {
  posts {
    data {
      attributes {
        title
      }
    }
  }
}
```

Press the play button in the middle of the playground to run the query, and the results will be populated on the right side.

![post-titles.png](/images/astro/using-graphql-in-strapi-and-astro/post-titles.webp)

Then we can get the `slug` and `body` like so:

```graphql
# Write your query or mutation here
query {
  posts {
    data {
      attributes {
        title
        slug
        body
      }
    }
  }
}
```

![title-slug-body-data.png](/images/astro/using-graphql-in-strapi-and-astro/title-slug-body-data.webp)

Finally, we can get the images and their various formats with the following query:

```graphql
# Write your query or mutation here
query {
  posts {
    data {
      id
      attributes {
        title
        slug
        body
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
```

Now that we have our GraphQL query returning all the necessary data, we can learn how to use it inside Astro.

## Using GraphQL in Astro

The first thing we are going to do is create a new folder called `graphql` inside of `src/pages` like so:

![graphql-folder.png](/images/astro/using-graphql-in-strapi-and-astro/graphql-folder.webp)

We are doing this to keep our GraphQL page components separate from the `posts` page components. There is nothing special about this folder. I am just doing this for demonstration purposes.

Inside this folder, create an `index.astro` file.

![index-astro.png](/images/astro/using-graphql-in-strapi-and-astro/index-astro.webp)

Inside this file, we want to use our GraphQL query to render all of the posts on this page. Here are the [official Astro docs](https://docs.astro.build/en/guides/data-fetching/#graphql-queries) on using GraphQL in Astro.

I will paste the entire code and break down what is happening.

```jsx
// src/pages/graphql/index.astro

---
const response = await fetch("http://127.0.0.1:1337/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
        query {
          posts {
            data {
              id
              attributes {
                title
                slug
                body
                image {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      `,
  }),
});

const { data } = await response.json();
---
```

The first thing we are doing is using `fetch()` to request our GraphQL endpoint.

```jsx
const response = await fetch("http://127.0.0.1:1337/graphql"
```

Next, we are passing an object that contains some additional data to `fetch()`

```jsx
{
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
        query {
          posts {
            data {
              id
              attributes {
                title
                slug
                body
                image {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      `,
  }),
}
```

First, we are telling the `fetch()` function that this is a `POST` request.

```jsx
method: "POST",
```

Next, we are passing some headers, letting it know that the content is of type JSON

```jsx
headers: { "Content-Type": "application/json" },
```

The body of our request is our GraphQL query [stringified](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) as JSON

```jsx
body: JSON.stringify({
    query: `
        query {
          posts {
            data {
              id
              attributes {
                title
                slug
                body
                image {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      `,
  }),
```

Let’s log out the data to ensure our request is working correctly.

```jsx
---
const response = await fetch("http://127.0.0.1:1337/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
        query {
          posts {
            data {
              id
              attributes {
                title
                slug
                body
                image {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      `,
  }),
});

const { data } = await response.json();
console.log(data);
---

<h1>GraphQL Blog</h1>
```

Open your browser to [`http://localhost:3000/graphql`](http://localhost:3000/graphql) and check your terminal to see if the data is logged.

![posts-data-logged.png](/images/astro/using-graphql-in-strapi-and-astro/posts-data-logged.webp)

You should see the following in your terminal. Each `[Object]` is one of our posts.

Now that our query is working, we can render the data on the page:

```jsx
{
  data.posts.data.map((post) => (
    <>
      <h2>{post.attributes.title}</h2>
      <p>{post.attributes.body}</p>
      <img
        src={`http://127.0.0.1:1337${post.attributes.image.data.attributes.formats.large.url}`}
      />
    </>
  ))
}
```

Here is the entire `src/pages/graphql/index.astro` file:

```jsx
---
const response = await fetch("http://127.0.0.1:1337/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
        query {
          posts {
            data {
              id
              attributes {
                title
                slug
                body
                image {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      `,
  }),
});

const { data } = await response.json();
---

<h1>GraphQL Blog</h1>

{
  data.posts.data.map((post) => (
    <>
      <h2>{post.attributes.title}</h2>
      <p>{post.attributes.body}</p>
      <img
        src={`http://127.0.0.1:1337${post.attributes.image.data.attributes.formats.large.url}`}
      />
    </>
  ))
}
```

![graphql-index-page.png](/images/astro/using-graphql-in-strapi-and-astro/graphql-index-page.webp)

## Dynamic routes

Let’s get some more practice creating dynamic routes. We want to create dynamic routes for each post returned from our GraphQL API.

Create a file called `[slug].astro` inside of `src/pages/graphql` like so:

![slug-astro-file.png](/images/astro/using-graphql-in-strapi-and-astro/slug-astro-file.webp)

Inside this file, we can paste the contents of `src/pages/graphql/index.astro` as most of the code is the same. However, we need to update our JavaScript code to use the `getStaticPaths()` function.

```jsx
---
export async function getStaticPaths() {
  const response = await fetch("http://127.0.0.1:1337/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          posts {
            data {
              id
              attributes {
                title
                slug
                body
                image {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });
  const { data } = await response.json();

  return data.posts.data.map((post) => {
    return {
      params: { slug: post.attributes.slug },
      props: { post },
    };
  });
}

const { post } = Astro.props;
---
```

Our code from the previous file is wrapped inside `getStaticPaths()`, and then we return the `params` and `props`. This is virtually identical to how we did it inside `src/pages/posts/[slug].astro`

Let’s update our template code with the following:

```jsx
<h2>{post.attributes.title}</h2>
<p>{post.attributes.body}</p>
<img
  src={`http://127.0.0.1:1337${post.attributes.image.data.attributes.formats.large.url}`}
/>
```

The entire file should look like this:

```jsx
---
export async function getStaticPaths() {
  const response = await fetch("http://127.0.0.1:1337/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          posts {
            data {
              id
              attributes {
                title
                slug
                body
                image {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });
  const { data } = await response.json();

  return data.posts.data.map((post) => {
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
/>
```

Now, if you open your browser to [`http://localhost:3000/graphql/my-first-post`](http://localhost:3000/graphql/my-first-post) or whatever the slug for one of your posts is, you should see the `post` page and the correct data.

![post-page.png](/images/astro/using-graphql-in-strapi-and-astro/post-page.webp)

## Wrap up

In this lesson, we learned how to install the GraphQL plugin for Strapi. Then we learned how to write our GraphQL query to get all of our posts. We then learned how to use GraphQL inside Astro and got more practice creating dynamic routes.
