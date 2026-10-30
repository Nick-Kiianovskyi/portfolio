# Лог работ — Why Me (Unique Value)

## Задача

Секция преимуществ/уникального предложения с карточками.

## Карточки

1. **Enterprise Expertise** — Более 20 лет опыта работы с SAP, Oracle и корпоративными системами.
2. **Business Understanding** — Глубокое понимание бизнес-процессов и требований пользователей.
3. **Full Stack Development** — Разработка современных веб-приложений от базы данных до пользовательского интерфейса.
4. **SAP consultant** — Созадание технических спецификаций, настройка и поддержка бизнес процессов
5. **Data analyst** — Анализ данных: Excel, Google Sheets, Python, R, Power BI, Tableau
6. **Project management** — Реализация внедрения электронного документооборота Documentum на предприятии. Внедрение системы электронного архивирования

Добавлено на все три index-страницы после Education, перед Contact.

## Разметка

```html
<section class="why-me" aria-labelledby="why-heading">
  <header class="section-header">
    <h2 id="why-heading">Why Me</h2>
    <p class="section-subtitle">Unique value proposition</p>
  </header>
  <div class="why-grid">
    <article class="why-card">...</article>
    ...
  </div>
</section>
```

## Стили

- Карточки с акцентной вертикальной полоской
- Hover-эффект как у других секций
- Адаптивная сетка 1/2/3 колонки
- Текст описания в приглушённом цвете

## Проверка

| Проверка | Результат |
|---|---|
| 6 карточек добавлены | ✅ |
| Весь текст из задания учтён | ✅ |
| Оформлено как секция преимуществ | ✅ |
| Адаптивная сетка | ✅ |
| Без JS и inline-стилей | ✅ |

**Итог: ALL CHECKS PASSED.**
