# Лог работ — Technical Stack

## Задача

Секция Technical Stack с навыками по категориям в карточках с тегами технологий.

## Категории и технологии

| Категория | Технологии |
|---|---|
| Frontend | HTML, CSS, JavaScript, TypeScript, React, Vite |
| Backend | Python, Node.js, Express, FastAPI |
| Databases | PostgreSQL, Oracle, SQL Server, Supabase |
| Enterprise | SAP SD, SAP QM, SAP S/4HANA |
| Tools | Git, GitHub, Postman, Vercel, VS Code |

Добавлено на все три index-страницы (`index.html`, `uk/index.html`, `en/index.html`) после Statistics, перед Projects.

## Разметка

```html
<section class="stack" aria-labelledby="stack-heading">
  <header class="section-header">
    <h2 id="stack-heading">Technical Stack</h2>
    <p class="section-subtitle">Skills grouped by focus areas</p>
  </header>
  <div class="stack-grid">
    <article class="stack-group">
      <h3>Frontend</h3>
      <ul class="tag-list">
        <li class="tag">HTML</li>
        ...
      </ul>
    </article>
    ...
  </div>
</section>
```

Каждая категория — `<article class="stack-group">`, технологии — теговые плашки в `.tag-list`.

## Стили (css/style.css)

- **Современные карточки:** `.stack-group` с фоном `--color-surface`, границей, `border-radius: 0.75rem`.
- **Теги:** `.tag` — pill-форма (`border-radius: 999px`), обводка, компактные отступы. При наведении меняют цвет границы и текста.
- **Эффект наведения на карточку:** `.stack-group:hover` — подъём `translateY(-4px)`, тень, акцентная граница.
- **Адаптивная сетка (Mobile First):** 1 колонка, на ≥768px — 2 колонки, на ≥1280px — 3 колонки.

## Проверка

| Проверка | Результат |
|---|---|
| Все категории присутствуют | ✅ |
| Все технологии по списку добавлены | ✅ |
| Карточки с тегами технологий | ✅ |
| Современный дизайн | ✅ |
| Адаптивная сетка | ✅ |
| Без JS и inline-стилей | ✅ |

**Итог: ALL CHECKS PASSED.**
