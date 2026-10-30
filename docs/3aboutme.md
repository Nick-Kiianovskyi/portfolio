# Лог работ — About Me

## Задача

Секция About Me с заголовком, тремя абзацами текста, пятью карточками преимуществ в адаптивной сетке.

## Текст

**UA (корень и uk/):**
- IT-фахівець із понад 20-річним досвідом роботи в галузі розробки програмного забезпечення, автоматизації бізнес-процесів та супроводу корпоративних систем.
- Працював з SAP, Oracle, SQL, PostgreSQL та сучасними веб-технологіями.
- Наразі створюю веб-застосунки з використанням React, TypeScript та Supabase.

**EN:**
- IT specialist with over 20 years of experience in software development, business process automation and enterprise system support.
- Worked with SAP, Oracle, SQL, PostgreSQL and modern web technologies.
- Currently building web applications with React, TypeScript and Supabase.

Карточки: `20+ Years Experience`, `Full Stack Development`, `SAP Expertise`, `Data Analytics`, `Business Automation` (одинаковые во всех версиях).

## Разметка

```html
<section class="about" aria-labelledby="about-heading">
  <h2 id="about-heading">About Me</h2>
  <p>…</p>
  <p>…</p>
  <p>…</p>
  <ul class="about-cards">
    <li class="about-card">20+ Years Experience</li>
    …
  </ul>
</section>
```

Секция добавлена сразу после Hero на всех трёх index-страницах (`index.html`, `uk/index.html`, `en/index.html`), перед `#projects`.

## Стили (css/style.css, Mobile First)

- `.about-cards` — `grid-template-columns: 1fr` (одна колонка на 320px).
- `@media (min-width: 48rem)` (768px) — `grid-template-columns: repeat(2, 1fr)`.
- `@media (min-width: 64rem)` (1024px) — `grid-template-columns: repeat(3, 1fr)`.
- Карточки: `.about-card` — фон `var(--color-surface)`, обводка `var(--color-border)`, скругление, выравнивание по центру.

## Проверка

| Проверка | Результат |
|---|---|
| Заголовок About Me присутствует | ✅ |
| Три абзаца текста на месте | ✅ |
| 5 карточек преимуществ | ✅ |
| Адаптивная сетка (1 / 2 / 3 колонки) | ✅ |
| Семантическая разметка, без JS и inline-стилей | ✅ |

**Итог: ALL CHECKS PASSED.**
