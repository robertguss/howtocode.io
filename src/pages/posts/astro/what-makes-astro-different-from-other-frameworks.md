---
title: 'What makes Astro different from other frameworks'
date: '2022-12-29'
slug: 'what-makes-astro-different-from-other-frameworks'
description: 'In this article, I discuss what makes Astro different from other frameworks. I also discuss how the islands architecture works and how Astro is HTML first by default.'
hero: '/images/astro/astro-cover.png'
---

Over the past few years, we have seen an explosion of [static site generators](https://jamstack.org/generators/). It seems like a new one gets released every week or so. Despite all the noise, Astro separates itself with some unique features and capabilities.

Let’s discuss what makes Astro different from other frameworks and static site generators.

## HTML first

One of the most important features and distinctive of Astro is that it is an HTML-first framework. By default, Astro does not ship any JS to the browser.

![fred-twitter-profile.png](/images/astro/what-makes-astro-different-from-other-frameworks/fred-twitter-profile.webp)

[Fred](https://twitter.com/fredkschott) is one of the co-creators of Astro, and in his Twitter bio, he considers himself to be the CEO of HTML. While this is quite humorous and fun, it showcases how serious they are about not sending any JS to the browser unless necessary.

This does not mean that you cannot use any JS with Astro. That would frankly be absurd. What it does mean, though, is that you have to intentionally opt-in and tell Astro when and where to use JS.

## Islands architecture

What separates Astro from virtually every other framework and static site generator out there is this concept of [Astro Islands](https://docs.astro.build/en/concepts/islands/) or “islands architecture.” You must understand this concept at the outset, as it is integral to how Astro works.

I highly recommend you [read their docs](https://docs.astro.build/en/concepts/islands/) to get the entire picture.

Astro Islands, sometimes called Component Islands, refer to components on a page with interactivity or JavaScript. Since Astro, by default, does not send any JS to the browser, you have to specifically tell it which components require JS. The reason why they are called islands is that each component in Astro is rendered in isolation.

![islands-architecture-1.png](/images/astro/what-makes-astro-different-from-other-frameworks/islands-architecture-1.webp)

Source: [https://jasonformat.com/islands-architecture/](https://jasonformat.com/islands-architecture/)

In this example, the `Header` , `Sidebar`, and `Image Carousel` require JS, while the rest of the components are server-rendered HTML. This technique is sometimes called **partial** or **selective hydration** because you only send JS to the components that need it for interactivity.

So how does this work in practice? Let’s look at some code.

```jsx
// src/pages/index.astro

---
import Header from "../components/Header.astro"
import Carousel from "../components/Carousel.jsx"
---

<Header />
<Carousel />
```

In this example, we are importing the `Header` and `Carousel` components. Notice that the `Header` component is an Astro component and the `Carousel` component is a React component. One of the unique things about Astro is that you can mix and match components from different frameworks on the same page! More on this later.

In this example, both of our components will be rendered without JS. However, both require JS, so how do we tell Astro they need JS?

```jsx
// src/pages/index.astro

---
import Header from "../components/Header.astro"
import Carousel from "../components/Carousel.jsx"
---

<Header client:load />
<Carousel client:visible />
```

Notice how we have updated our components with some [special directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) `client:load` and `client:visible` that tell Astro when to render these components with JS.

- client:load will render the component as soon as possible
- client:visible will render the component once it enters the user’s viewport. If the user never scrolls down to see it, it never loads.

Astro has several different [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) that give you fine-tuned control over when and how these components are rendered with JS. I won’t cover all of them here, so please read [the docs](https://docs.astro.build/en/reference/directives-reference/#client-directives) to familiarize yourself with them.

We will see more examples when we build our project.

## Why islands?

The main reason for the Island's Architecture is its performance. The less JS you ship to the browser, the faster your site is. It’s that simple. It also makes a lot of sense if you think about it. Why should you send a bunch of JS down to the client when only a couple of components need it? With the Islands Architecture, only the components that need JS get JS, and the rest are rendered with 100% pure HTML.

Also, by using client directives, you can tell Astro when and how to render each component. So in our example above, the `Header` component will load immediately, and the `Carousel` component will load only when the user scrolls down to it, and it enters their viewport.

Islands allow tremendous fine-tuned control so that only the components that need JS get it, and they will only load whenever you want them to.

Islands allow you to create blazing-fast sites and apps!

![https://media.tenor.com/Hw0aKasI6B4AAAAC/fast-blazing-fast.gif](https://media.tenor.com/Hw0aKasI6B4AAAAC/fast-blazing-fast.gif)
