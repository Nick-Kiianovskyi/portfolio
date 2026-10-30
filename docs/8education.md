# Лог работ — Education

## Задача

Секция Education в виде современной карточки, с указанными степенями и датами.

## Содержимое

1. Bachelor's Degree in Automation of Computer-Integrated Systems and Robotics — Kryvyi Rih National University — Expected Graduation: 2026
2. Master's Degree in Economics — Kryvyi Rih National University — 2000–2001
3. Specialist Degree in Economics and Mathematics — Kryvyi Rih National University — 1999–2000
4. Bachelor's Degree in Economic Cybernetics — Kryvyi Rih National University — 1995–1999

Добавлено на все три index-страницы после Featured Projects, перед Contact.

## Разметка

```html
<section class="education" aria-labelledby="edu-heading">
  <header class="section-header">
    <h2 id="edu-heading">Education</h2>
  </header>
  <div class="edu-grid">
    <article class="edu-card">
      <div class="edu-icon" aria-hidden="true">🎓</div>
      <div class="edu-body">
        <h3>...</h3>
        <p class="edu-institution">Kryvyi Rih National University</p>
        <p class="edu-meta">...</p>
      </div>
    </article>
    ...
  </div>
</section>
```

## Стили (css/style.css)

- **Современные карточки:** `.edu-card` с поверхностью, границей, скруглением.
- **Иконка:** круглая иконка с акцентным фоном.
- **Типографика:** название степени в `<h3>`, университет серым, даты/ожидаемое окончание акцентным цветом.
- **Hover-эффект:** подъём, тень, акцентная граница.
- **Сетка:** одноколоночная (читаемо на всех устройствах).

## Проверка

| Проверка | Результат |
|---|---|
| Все 4 записи добавлены | ✅ |
| Современные карточки | ✅ |
| Корректные названия и даты | ✅ |
| Адаптивный вид | ✅ |
| Без JS и inline-стилей | ✅ |

**Итог: ALL CHECKS PASSED.**
