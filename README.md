# Mykola Kiianovskyi — Portfolio

Static bilingual portfolio and CV site. No build step, no JavaScript, no
external dependencies.

## Languages

- `/` — Ukrainian
- `/en/` — English

Both versions include a detailed work-experience page (`work_experience_UA.html`
and `work_experience_EN.html`).

## Structure

```text
index.html                 Ukrainian home page
en/index.html              English home page
work_experience_UA.html    Ukrainian work-experience page
work_experience_EN.html    English work-experience page
css/style.css              Main styles
css/resume.css             Work-experience page styles
css/print.css              Print styles
files/                     CV PDFs
images/                    Project images
```

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static
server:

```sh
python -m http.server 8000
```

## Deploy

Publish the repository root as a static site (GitHub Pages, Netlify, Vercel, or
any static hosting). The site uses relative paths and works from a subdirectory.
