# Jiajun Chen

Personal academic website based on [Academic Pages](https://academicpages.github.io/).

## Local preview

Docker is the recommended local environment because it keeps Ruby and Jekyll versions consistent.

```bash
docker compose up -d --build
```

Open [http://localhost:4000](http://localhost:4000). The server watches content files and refreshes the site after edits. Stop it with:

```bash
docker compose down
```

## Content management

| Content | File or directory |
| --- | --- |
| Name, bio, avatar, social links, and site URL | `_config.yml` |
| Homepage and research experience | `_pages/about.md` |
| Publications | `_publications/` |
| Profile image and other assets | `images/` |

To add a publication, copy an existing Markdown file in `_publications/`, update its front matter, and restart the local server only if you modify `_config.yml`.

## Add a blog later

When you are ready, add posts as Markdown files in `_posts/` with names such as `2026-07-27-my-first-post.md`, create a blog archive page, and add a `Blog` link to `_data/navigation.yml`. The existing Jekyll setup will generate the posts automatically.

## Publishing

Pushes to the `main` branch automatically build and deploy the website to GitHub Pages at `https://imbaldy.github.io`.
