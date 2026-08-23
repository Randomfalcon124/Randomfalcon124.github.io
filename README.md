# Akshay Patil — Engineering Portfolio

Static site, no build step. Supplements the resume with long-form project write-ups, galleries, and CAD renders.

## Structure

```
index.html          page skeleton (don't need to touch)
css/style.css       styling, light + dark themes
js/main.js          renders everything from data.js (don't need to touch)
js/data.js          ALL CONTENT — edit this
assets/img/<proj>/  project images
assets/AkshayPatil_Resume.pdf
```

## Editing content

Everything is in `js/data.js`:

- **profile** — name, tagline, hero stats, contact links, resume path.
- **projects[]** — one object per project. Fields:
  - `id` — URL slug (`#id` deep-links to the project modal).
  - `title`, `date`, `role`, `summary`, `categories` (drives the filter chips), `tags`.
  - `featured: true` — adds a "Featured" badge.
  - `facts[]` — `{label, value}` pairs shown in the key-facts box.
  - `sections[]` — `{heading, text}` or `{heading, bullets: []}`.
  - `images[]` — `{src, alt, caption}`. **First image = card thumbnail + modal hero.** Empty array shows a "photos coming soon" placeholder.
  - `links[]` — `{label, href}` external buttons (videos, GitHub, CAD shares).
- **gallery[]** — CAD & Renders section. Either `{project: 'id', index: N, tool: 'Fusion 360'}` to reuse a project image, or a standalone `{src, caption, tool}`.
- **experience[]**, **skills[]** — timeline and skill chips.

### Adding a project

1. Drop images in `assets/img/<slug>/` (JPG, ≤1600px wide, ~100–400 KB each).
2. Add an object to `projects[]` in `js/data.js`. Put the best landscape render first.
3. Optionally add its renders to `gallery[]`.

### Updating the resume

Replace `assets/AkshayPatil_Resume.pdf` (keep the filename, or change `profile.resume`).

## Run locally

```
python -m http.server 8765
```

then open http://localhost:8765.

## Deploy — GitHub Pages

```
git init
git add -A
git commit -m "Portfolio"
gh repo create <username>.github.io --public --source=. --push
```

Then in the repo: Settings → Pages → Source: `main` / root. Site appears at `https://<username>.github.io/` in ~1 minute. (`.nojekyll` is already present so nothing gets mangled.)

For a custom domain, add a `CNAME` file containing the domain and point DNS at GitHub Pages.

## Deploy — Vercel

```
npx vercel
```

Accept defaults (framework: Other, no build command, output dir `.`).
