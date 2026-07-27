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
| CV | `_pages/cv.md` |
| Publications | `_publications/` |
| Profile image and other assets | `images/` |

To add a publication, copy an existing Markdown file in `_publications/`, update its front matter, and restart the local server only if you modify `_config.yml`.

## Publishing

After the local review is approved, configure GitHub Pages for `IMBALDY/IMBALDY.github.io` and publish the `main` branch. The website URL is configured as `https://imbaldy.github.io` in `_config.yml`.
