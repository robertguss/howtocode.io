---
title: 'Working with Markdown and MDX'
date: '2022-12-29'
slug: 'working-with-markdown-and-mdx'
description: 'In this article, you will learn how to use both markdown and MDX files in Astro.'
hero: '/images/astro/astro-cover.png'
---

Astro comes with built-in support for [Markdown](https://daringfireball.net/projects/markdown/) files. You can also use [MDX](https://mdxjs.com/) with the [@astro/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration. MDX allows you to use JSX and components within your Markdown files.

## Markdown and MDX Pages

Astro will turn any file with a `.md` or `.mdx` file extension placed within the `src/pages` directory into a page route. So not only can you use page components like `src/pages/about.astro` to create pages, but you can use markdown and MDX files as well!

![about-md-file-explorer.png](/images/astro/working-with-markdown-and-mdx/about-md-file-explorer.webp)

Now, if you run the dev server and go to `[http://localhost:3000/about](http://localhost:3000/about)` you will see the following:

![about-markdown-page.png](/images/astro/working-with-markdown-and-mdx/about-markdown-page.webp)

There are many specific [Markdown Features](https://docs.astro.build/en/guides/markdown-content/#markdown-features), and [MDX Only Features](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) supported by Astro, which I won’t cover here. Please check out the [official docs](https://docs.astro.build/en/guides/markdown-content/) to learn more about each.

## Importing Markdown

In the Working with Data lesson, we learned how to fetch remote content and use it in our components. Now let’s learn how to import data from Markdown files and use them in our components. This is a perfect use case for blogs or documentation sites where your posts and/or docs are written in Markdown.

First, I will create some example blog posts with dummy data.

![blog-posts.png](/images/astro/working-with-markdown-and-mdx/blog-posts.webp)

Here are the contents of each Markdown file.

```markdown
<!-- src/pages/post/post-1.md -->

---

## title: "My first blog post!"

This is my first blog post!
```

```markdown
<!-- src/pages/post/post-2.md -->

---

## title: "My 2nd blog post!"

This is my 2nd blog post!
```

```markdown
<!-- src/pages/post/post-3.md -->

---

## title: "My 3rd blog post!"

This is my 3rd blog post!
```

Next, I will update the `src/pages/blog/index.astro` page component to render all of these Markdown posts.

```jsx
---
const posts = await Astro.glob("../post/*.md");
---

<h1>My Blog</h1>

{
  posts.map((post) => (
    <h3>
      <a href={post.url}>{post.frontmatter.title}</a>
    </h3>
  ))
}
```

Notice how I can access the frontmatter of each markdown file with `post.frontmatter`. You can see all of the exported properties in the [official docs](https://docs.astro.build/en/guides/markdown-content/#exported-properties).

![markdown-blog-posts-rendered.png](/images/astro/working-with-markdown-and-mdx/markdown-blog-posts-rendered.webp)

If you click on one of the titles, you will be taken to the page for that post.

![post-1-page.png](/images/astro/working-with-markdown-and-mdx/post-1-page.webp)

## Wrap up

In this lesson, you learned how to create pages with Markdown files. You also learned to import Markdown files and render them within a page component template.

Make sure to check out the [official Markdown & MDX docs](https://docs.astro.build/en/guides/markdown-content/) for more info.
