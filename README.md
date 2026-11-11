# Chase Stockwell

Personal site for Chase Stockwell, published with GitHub Pages from the root of `master`.

The homepage is a short portfolio. Project write-ups live in `projects/`. The 2019 study "What statistics lead to NBA success" used to be the whole site. It is preserved at [projects/nba-statistics/](projects/nba-statistics/) and linked from the homepage. The notebook, CSV folders, and milestone outline stayed at their original paths so old file links keep working.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8000
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/). Links are root-relative (`/css/styles.css`, `/projects/...`) because GitHub Pages serves this repository at `https://chas3stockwell.github.io/`.

## Edit the intro, about, and contact

Open `index.html` and search for `EDIT:`.

- Hero, education, and experience are plain text in that file.
- Contact entries marked `TODO:` are not links yet. Replace a TODO with a real link, for example:

```html
<li><a href="mailto:you@example.com">you@example.com</a></li>
<li><a href="https://www.linkedin.com/in/your-id">LinkedIn</a></li>
<li><a href="/resume.pdf">Resume (PDF)</a></li>
```

Put `resume.pdf` in the repository root if you use that last example.

The headshot is the dashed figure in the hero. The HTML comment there says how to swap in a photo. Until then the caption stays `TODO: headshot`.

## Add a project

1. Copy a folder under `projects/`. `projects/product-management/` is a blank template. Rename the copy to a short slug: lowercase words, hyphens, no spaces. Example: `projects/my-new-project/`.
2. Edit `projects/my-new-project/index.html`. Change the `<title>`, the eyebrow, the `<h1>`, and the body. Keep the header and footer markup (search the site for `site-header` if you rename a nav item; the same header is repeated on each page).
3. On the homepage, copy one `<li>` inside `<ol class="project-list">`. Point the title link at `/projects/my-new-project/`. Update the status line and the summary.
4. Numbers on the cards are automatic. You do not have to renumber them.

Use a dashed placeholder card (`class="card is-placeholder"`) while the write-up is still a TODO. Remove that class when the page is real.

## Edit a project

Change that project's `index.html`. If the title or one-line summary changes, update the matching card in `index.html` too. The homepage does not read the project pages automatically. Both files are the source of truth, so there is no build step.

Styles for every new page are in `css/styles.css`. Color and fonts are the variables at the top of that file. Newsreader and Public Sans are under `fonts/`, with their license texts beside them.

## PlanetIQ

The PlanetIQ card and `projects/planetiq/index.html` are placeholders on purpose. A comment at the top of that page, and above the homepage card, says not to add PlanetIQ data, figures, or other confidential detail until PlanetIQ approves a public release.

## The 2019 basketball project

Leave these where they are:

- `projects/nba-statistics/index.html` — the original notebook export, plus a bar at the top that links back here
- `projects/nba-statistics/custom.css` — the stylesheet the export expects
- `Basketball Analysis Tutorial Final.ipynb`
- `Milestone 1 Outline.docx`
- `data_NBA/` and `data_torvik/`
- `Previous Checkpoints for Reference/`

`js/legacy-anchors.js` sends old homepage anchors (for example `/#Final-Conclusions`) to the preserved page. Do not reuse those ids on the homepage.

The export used to request Bootstrap icon fonts from a `components/` folder that was never in this repository. Those font rules were removed so the preserved page does not call missing files. The notebook text, charts, and code output are unchanged.

## Publishing

GitHub Pages is set to the `master` branch, folder `/`. Merging to `master` publishes the site. `.nojekyll` is in the root so Pages serves the files as-is and does not run Jekyll over the notebook export. Leave that file in place.

There is a basic `404.html` for unknown addresses.
