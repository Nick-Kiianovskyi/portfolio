# Лог работ — Hero Section

## Задача

Hero Section: имя MIKOLA KIIANOVSKYI, должности (Full Stack Developer /
Business Systems Specialist / Data Analyst), описание о 20+ роках досвіду,
4 кнопки (View Resume, Download CV, GitHub, LinkedIn), место под фото.
Desktop — две колонки, Mobile — одна.

## Что сделано

### HTML (index.html, en/index.html)

Старый блок `.intro` заменён на Hero:

```html
<section class="hero" aria-labelledby="hero-heading">
  <div class="hero-body">
    <h1 id="hero-heading" class="hero-name">Mikola Kiianovskyi</h1>
    <ul class="hero-positions">…3 должности…</ul>
    <p class="hero-description">20+ років досвіду…</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="work_experience_UA.html">View Resume</a>
      <a class="btn btn-secondary" href="files/cv_fullstack_kiianovskyi.pdf" download>Download CV</a>
      <a class="btn btn-secondary" href="https://github.com/Nick-Kiianovskyi">GitHub</a>
      <a class="btn btn-secondary" href="https://www.linkedin.com/in/nick-kiyanovskiy-537a90b6">LinkedIn</a>
    </div>
  </div>
  <figure class="hero-media">
    <img class="hero-photo" src="images/foto1.jpg" alt="…" width="243" height="315">
  </figure>
</section>
```

- Имя набрано заглавными через `text-transform: uppercase` (в разметке —
  обычный регистр для корректного чтения скринридерами).
- Описания: UA-версия — украинская, EN-версия — английская.
- Download CV в hero ведёт на PDF соответствующего языка (на `/en/`
  странице пути исправлены на `../files/…`, `../images/…`).

### CSS (css/style.css)

- Mobile First: `.hero` — grid с одной колонкой; на `@media (min-width: 48rem)`
  — `grid-template-columns: 1fr auto` (две колонки: текст + фото).
- Заголовок: `font-size: clamp(1.75rem, 8vw, 2.5rem)` — читается и на 320px,
  и на 1440px; `overflow-wrap: break-word` страхует от длинных слов.
- Фото: `width: min(100%, 20rem)`, `aspect-ratio: 1/1`, `object-fit: cover`,
  `max-width: 100%` у `.hero-media` — фотография не выходит за границы ни
  при какой ширине.
- Кнопки: `.hero-actions { display: flex; flex-wrap: wrap; gap }` —
  переносятся строками на узких экранах; `.btn-primary` (акцент) +
  `.btn-secondary` (обводка), увеличенная touch-область 0.6rem × 1.1rem.
- Фото: `images/foto1.jpg` (243×315).

### Исправленные проблемы

1. **Битые пути на /en/ странице** — в hero были указаны
   `files/…` и `images/…` без `../`. Найдено автопроверкой, исправлено
   для hero-фото, кнопок Download CV и остальных ссылок на этих страницах.
2. **Удалены устаревшие правила `.intro h1`** в style.css (раздел intro
   заменён на hero); баланс скобок CSS проверен.

## Проверка (автоматический скрипт)

| Проверка | Результат |
|---|---|
| Заголовок хорошо читается (clamp-размер, uppercase, overflow-wrap) | ✅ |
| Кнопки отображаются корректно (4 кнопки на каждой index-странице, flex-wrap) | ✅ |
| Фотография не выходит за границы (min(100%, 20rem), aspect-ratio, max-width) | ✅ |
| Секция корректна на 320px (одна колонка, кнопки переносятся) | ✅ |
| Секция корректна на 768px (переход к двум колонкам на 48rem = 768px) | ✅ |
| Секция корректна на 1440px (контент центрируется, max-width 60rem) | ✅ |
| Нет битых ссылок (включая исправленные пути ../files, ../images) | ✅ |
| Нет JS и inline-стилей | ✅ |

**Итог: ALL CHECKS PASSED.**

## Оставшиеся TODO

- [x] Заменить `images/portrait.svg` на реальное профессиональное фото.
- [x] Подставить реальные ссылки GitHub и LinkedIn.
