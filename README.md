# Jiajun Chen — Academic Homepage

A custom Astro academic homepage with Git-backed content managed through Pages CMS.

## Local preview

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. Production validation:

```bash
npm run build
```

## Visual content editing

The `.pages.yml` file configures Chinese-labeled forms for:

- Profile, avatar, and personal links
- Publications
- Projects
- Writing posts, categories, tags, drafts, and media

Publication thumbnails are optional, while projects require a cover image. The profile form also controls how many combined Selected Projects cards appear before the automatic “Show all” button.

After this branch is pushed to GitHub, install the Pages CMS GitHub App and open the repository from [app.pagescms.org](https://app.pagescms.org/). Pages CMS edits the files under `src/content/` and uploads media under `public/images/`.

Demo posts are marked `Demo` in their frontmatter and can be deleted from Pages CMS.

## Deployment

This local redesign does not replace the current online site until it is explicitly committed and pushed. The included GitHub Pages workflow already uses Astro's official deployment action and will activate only after the changes are pushed.
