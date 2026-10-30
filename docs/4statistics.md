# Лог работ — Statistics

## Задача

Секция Statistics с 4 карточками в адаптивной сетке, современный дизайн, эффект наведения, акцентный цвет.

## Карточки

1. `20+` — `Years in IT`
2. `20+` — `Completed Projects`
3. `5+` — `Technology Domains`
4. `1000+` — `Business Users Supported`

Одинаковый набор во всех трёх index-страницах (корень, uk/, en/).

## Разметка

```html
<section class="statistics" aria-labelledby="stats-heading">
  <h2 id="stats-heading" class="visually-hidden">Statistics</h2>
  <ul class="stats-grid">
    <li class="stat-card">
      <p class="stat-value">20+</p>
      <p class="stat-label">Years in IT</p>
    </li>
    ...
  </ul>
</section>
```

Заголовок скрыт визуально через `.visually-hidden` (для доступности). Секция размещена после About Me, перед Projects.

## Стили (css/style.css)

- **Сетка (Mobile First):** 1 колонка по умолчанию, на ≥576px (`36rem`) — 2 колонки, на ≥1024px (`64rem`) — 4 колонки.
- **Современный дизайн:** `border-radius: 0.75rem`, `background: var(--color-surface)`, тонкая граница, декоративная полоса акцентного цвета слева (`::before`).
- **Акцентный цвет:** числовые значения (`.stat-value`) и левая полоса использованы с `var(--color-accent)`.
- **Эффект наведения:** `translateY(-4px)`, `box-shadow`, изменение цвета границы; добавлен `:focus-within` для доступности при фокусе на ссылках (на будущее).
- **Адаптивность:** числа используют `clamp(2rem, 6vw, 2.75rem)` для чтения на узких экранах.

## Проверка

| Проверка | Результат |
|---|---|
| 4 карточки присутствуют | ✅ |
| Современный дизайн реализован | ✅ |
| Эффект наведения (`:hover`, `:focus-within`) | ✅ |
| Акцентный цвет использован | ✅ |
| Адаптивная сетка (1/2/4 колонки) | ✅ |
| Без JS и inline-стилей | ✅ |

**Итог: ALL CHECKS PASSED.**
