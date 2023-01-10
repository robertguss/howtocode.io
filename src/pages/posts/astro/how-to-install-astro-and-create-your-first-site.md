# How to install Astro and create your first site

## Node.js

Before we can begin learning Astro, we will need a few tools first. The first thing we will need is to install [Node.js](https://nodejs.org/en/). Make sure you install the most recent LTS version.

At the time I am writing this, the latest LTS version is `18.12.1`.

![](how-to-install-astro-and-create-your-first-site/node-lts-install.jpg)

## VSCode

Next, we will use [VSCode](https://code.visualstudio.com/) as our text editor throughout this tutorial. Feel free to use whatever you like if you prefer something else.

Once you have installed VSCode, open it and launch the terminal built into it. You can do this by pressing `ctrl + ~` on your keyboard or clicking on `Terminal > New Terminal` from the menu bar.

![](how-to-install-astro-and-create-your-first-site/vscode-new-terminal.jpg)

Next, we want to make sure that Node.js is installed correctly. Within your terminal type the following, then press Enter.

```bash
node -v
```

You should see the same Node version output into your terminal as the one you download from the Node.js website.

![](how-to-install-astro-and-create-your-first-site/node-versoin.jpg)

## Creating a new Astro project

Within the terminal, type the following to create a new Astro project, then press Enter.

```bash
npm create astro@latest
```

![](how-to-install-astro-and-create-your-first-site/npm-create-astro.jpg)

Press `y` and hit enter to install the latest version of `create-astro`.

The CLI will ask you for the name of your project, you can name it whatever you like. I just went with whatever default name it provided.

Next, you will be asked how you would like to set up your project. Choose the “a few best practices (recommended)” option.

![](how-to-install-astro-and-create-your-first-site/astro-best-practices-prompt.jpg)

Then press `y` to install the npm dependencies.

You can then choose if you would like the CLI to create a new `.git` repository, I chose no for now.

Then select “Strict” for the TypeScript setup.

![](how-to-install-astro-and-create-your-first-site/typescript-strict-prompt.jpg)

Now everything should be installed.

## Starting the dev server

Next, you will need to `cd` into your project folder like so:

```bash
cd my-astro-project
```

Then start the dev server with:

```bash
npm run dev
```

You can then open your browser and go to [http://localhost:3000](http://localhost:3000) to see your new Astro site!

If you are using a Mac, you can `option + click` on the URL in the VSCode terminal to open it automatically.

You should see the following:

![](how-to-install-astro-and-create-your-first-site/astro-welcome-screen.jpg)

## Installing the Astro VSCode extension

Open the file `src/pages/index.astro` in VSCode and you should see the following:

![](how-to-install-astro-and-create-your-first-site/index-astro-file.jpg)

Currently, VSCode does not recognize the `.astro` file extension and so we don’t have nice syntax highlighting. To fix this, we will need to install the official Astro VSCode extension.

In VSCode click on the extensions icon in the left-hand sidebar

![](how-to-install-astro-and-create-your-first-site/extensions-icon.jpg)

Then search for “Astro.” The first result should be the correct extension, then click to install it.

![](how-to-install-astro-and-create-your-first-site/astro-extension.jpg)

After installation, the `index.astro` file should have syntax highlighting.

![](how-to-install-astro-and-create-your-first-site/index-astro-syntax-highlighting.jpg)

Now VSCode is all setup and configured to work with Astro components and files.

## Wrap up

In this lesson, you learned how to install Node.js, VSCode, and Astro. You also created your first Astro project using the `create-astro` CLI. You then learned how to install the Astro extension for VSCode to get syntax highlighting and other features useful for working with Astro projects in VSCode.
