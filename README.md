# raydee99.com

[![Deploy static content to Pages](https://github.com/codeaquil/raydee99.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/codeaquil/raydee99.github.io/actions/workflows/deploy.yml)

A personal website for Ray.

## Running the Website

This project uses [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) to run the
website. Enable GitHub Pages from settings and it should automatically work. The website should be available at
<https://raydee99.github.io>, but you can also add your own domain in the settings.

### Updating the Website

1. First [create a GitHub branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch).
2. To **add a new game:** edit `data/games.yml` to add an entry in the format described in the file. Add the thumbnail image for the game in `data/images/`.
3. To **add a new podcast:** edit `data/podcasts.yml` to add an entry in the format described there.
4. Make sure all your edits are [committed](https://docs.github.com/en/get-started/start-your-journey/hello-world#step-3-make-and-commit-changes) to your GitHub branch.
5. [Create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request) and [merge it](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request#merging-a-pull-request). The website should automatically update in a few minutes.
6. To **undo your changes:** [revert the Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request#reverting-a-pull-request).

## Developer Docs

### Dependencies
 - [git](https://git-scm.com/)
 - Ruby (v3.3.6)
 - NodeJS (v22.11.0)

If installing Ruby and NodeJS for the first time, I recommend using the [asdf-vm](https://asdf-vm.com/) installer.

### Quickstart
 1. Install Ruby dependencies:
```
bundle install
```
 2. Install Javascript dependencies:
```
npm install
```
 3. Launch development server:
```
bundle exec middleman
```
 4. Compile website:
```
bundle exec middleman build
```
 5. Compile website and launch staging server:
```
npm run server
```

### Techstack and Documentation
 - [Middleman v4 Framework](https://middlemanapp.com) for modular HTML templating and build pipeline
 - [esbuild](https://esbuild.github.io/) for Javascript bundling
 - [Bootstrap v5.3](https://getbootstrap.com) with custom theme for styling
