---
title: 'How to install Astro and build your first site'
date: '2022-12-28'
slug: 'how-to-install-astro-and-build-your-first-site'
description: 'In this article, I show you how to install Node.js, VSCode, & Astro and build your first site.'
---

## Dev tools

### Node.js

Before we can begin learning Astro, we will need a few tools first. The first thing we will need is to install [Node.js](https://nodejs.org/en/). Make sure you install the most recent LTS version. At the time I am writing this, the latest LTS version is `18.12.1` .

![node-lts-install.png](/images/astro/how-to-install-astro-and-build-your-first-site/node-lts-install.webp)

### VSCode

Next, we will use [VSCode](https://code.visualstudio.com/) as our text editor throughout this tutorial. Feel free to use whatever you like if you prefer something else. Once you have installed VSCode, open it and launch the terminal built into it. You can do this by pressing `ctrl + ~` on your keyboard or clicking on Terminal > New Terminal from the menu bar.

![vscode-new-terminal.png](/images/astro/how-to-install-astro-and-build-your-first-site/vscode-new-terminal.webp)

Next, we want to make sure that Node.js is installed correctly. Within your terminal type the following, then press Enter.

```bash
node -v
```

You should see the same Node version output into your terminal as the one you download from the Node.js website.

![node-versoin.png](/images/astro/how-to-install-astro-and-build-your-first-site/node-versoin.webp)

## Creating a new Astro project

Within the terminal, type the following to create a new Astro project, then press Enter.

```bash
npm create astro@latest
```

![npm-create-astro.png](/images/astro/how-to-install-astro-and-build-your-first-site/npm-create-astro.webp)

Press `y` and hit enter to install the latest version of `create-astro`.

The CLI will ask you for the name of your project, you can name it whatever you like. I just went with whatever default name it provided.

Next, you will be asked how you would like to set up your project. Choose the “a few best practices (recommended)” option.

![astro-best-practices-prompt.png](/images/astro/how-to-install-astro-and-build-your-first-swebp/astro-best-practices-prompt.png)

Then press `y` to install the npm dependencies.

You can then choose if you would like the CLI to create a new `.git` repository, I chose no for now.

Then select “Strict” for the TypeScript setup.

![typescript-strict-prompt.png](/images/astro/how-to-install-astro-and-build-your-first-site/typescript-strict-prowebp.png)

Now everything should be installed.

## Starting the dev server

Next, you will need to `cd` into your project folder like so:

```bash
cd ./<name of project>
# for example cd ./spiffy-spiral
```

Then start the dev server with:

```bash
npm run dev
```

You can then open your browser and go to `[http://localhost:3000](http://localhost:3000)` to see your new Astro site!

If you are using a Mac, you can `option + click` on the URL in the VSCode terminal to open it automatically.

You should see the following:

![astro-welcome-screen.png](/images/astro/how-to-install-astro-and-build-your-first-site/astro-welcome-screen.webp)

## Installing the Astro VSCode extension

Open the file `src/pages/index.astro` in VSCode and you should see the following:

![index-astro-file.png](/images/astro/how-to-install-astro-and-build-your-first-site/index-astro-file.webp)

Currently, VSCode does not recognize the `.astro` file extension and so we don’t have nice syntax highlighting. To fix this, we will need to install the official Astro VSCode extension.

In VSCode click on the extensions icon in the left-hand sidebar

![extensions-icon.png](/images/astro/how-to-install-astro-and-build-your-first-site/extensions-icon.webp)

Then search for “Astro.” The first result should be the correct extension, then click to install it.

![astro-extension.png](/images/astro/how-to-install-astro-and-build-your-first-site/astro-extension.webp)

After installation, the `index.astro` file should have syntax highlighting.

![index-astro-syntax-highlighting.png](/images/astro/how-to-install-astro-and-build-your-first-swebp/index-astro-syntax-highlighting.png)

Now VSCode is all setup and configured to work with Astro components and files.

## Wrap up

In this lesson, you learned how to install Node.js, VSCode, and Astro. You also created your first Astro project using the `create-astro` CLI. You then learned how to install the Astro extension for VSCode to get syntax highlighting and other features useful for working with Astro projects in VSCode.
