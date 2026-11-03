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
404.html                   Custom GitHub Pages not-found page
robots.txt                 Crawler rules
sitemap.xml                Sitemap with hreflang alternates
css/style.css              Main styles
css/resume.css             Work-experience page styles
css/print.css              Print styles
files/                     CV PDFs
images/                    Project images and social preview
```

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static
server:

```sh
python -m http.server 8000
```

## Deploy

The site is published from the repository root with GitHub Pages:

- Ukrainian: <https://nick-kiianovskyi.github.io/portfolio/>
- English: <https://nick-kiianovskyi.github.io/portfolio/en/>

All paths inside the site are relative, so it also works from any other static
host or subdirectory.

## SEO

Every page contains a canonical URL, `hreflang` alternates (including
`x-default`), Open Graph and Twitter Card metadata. `robots.txt` and
`sitemap.xml` live in the repository root.

If a custom domain is added later, update the absolute URLs in the four HTML
pages, `robots.txt` and `sitemap.xml`.
