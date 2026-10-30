# Лог работ — Career Journey

## Задача

Вертикальный timeline с опытом работы, современный дизайн с точками и линиями.

## Содержимое

### Позиция 1 — Consultant SAP SD, QM (2017 - Present)
- Configuring SD/QM functionality (setup of company codes, markets, trade documents)
- Development and preparation of business process documentation, technical tasks for ABAP developers
- User consultation
- Creating roles, transactions and reports
- Preparation of analytical information for key users
- Archiving QM, SD historical data, preparation proceeding, analysis
- Reconciliation data after migration

### Позиция 2 — Project manager, Consultant IT, Data Analyst, Developer (2013-2017)
- Project team management (5-15 participants)
- Market analysis solutions, search for contractors, prepare development documentation
- Time management, negotiations with stakeholders
- Prepare data and information for making regular report data analysis
- Development and improve business application
- User consultation
- Support of developed IT systems

### Позиция 3 — Head Division, Leading engineer programmer, ArcelorMittal Kryviy Rih, Ukraine (2001-2013)
- Organization, planning, management works IT division
- Development and implementation IT system (Oracle)
- Development and preparation of business process documentation

Размещено на всех трёх index-страницах после Technical Stack, перед Projects.

## Разметка

```html
<section class="timeline-section" aria-labelledby="timeline-heading">
  <header class="section-header">
    <h2 id="timeline-heading">Career Journey</h2>
  </header>
  <ol class="timeline">
    <li class="timeline-item">
      <div class="timeline-marker"></div>
      <article class="timeline-card">
        <header class="timeline-card-header">
          <h3>...</h3>
          <p class="timeline-period">...</p>
        </header>
        <ul class="timeline-list">...</ul>
      </article>
    </li>
    ...
  </ol>
</section>
```

Используется семантический `<ol>` для хронологии.

## Стили (css/style.css)

- **Вертикальная линия:** `.timeline::before` — градиент от акцентного к граничному цвету, позиционирована слева.
- **Точки:** `.timeline-marker` — круг акцентного цвета с мягкой тенью.
- **Карточки:** те же паттерны, что и другие секции (surface, border, radius), с hover-эффектом подъёма.
- **Период:** выделен акцентным цветом `.timeline-period`.
- **Адаптивность:** на мобильном линия ближе, на десктопе (`>=64rem`) отступ увеличен.

## Проверка

| Проверка | Результат |
|---|---|
| Вертикальный timeline оформлен | ✅ |
| 3 позиции с корректными датами | ✅ |
| Все пункты из описания добавлены | ✅ |
| Современный дизайн с точками и линиями | ✅ |
| Адаптивность | ✅ |
| Семантика (ol/article) | ✅ |
| Без JS и inline-стилей | ✅ |

**Итог: ALL CHECKS PASSED.**
