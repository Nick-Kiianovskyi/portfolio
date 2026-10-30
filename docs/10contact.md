# Лог работ — Contact & Footer

## Задача

Секция Contact с ссылками и SVG-иконками, большая кнопка Contact Me, современный футер с текстом © 2026 Nikolay Kiyanovskiy All Rights Reserved. Кнопки ведут на реальные ссылки (без JS).

## Ссылки

- Email: k.creideiki@gmail.com (mailto:)
- GitHub: https://github.com/Nick-Kiianovskyi
- LinkedIn: https://www.linkedin.com/in/nick-kiyanovskiy-537a90b6
- Telegram: https://t.me/k_creideiki

Кнопка Contact Me ведёт на mailto:k.creideiki@gmail.com.

## Разметка

```html
<section class="contact-section" id="contact" aria-labelledby="contact-heading">
  <header class="section-header">
    <h2 id="contact-heading">Contact</h2>
    <p class="section-subtitle">Get in touch</p>
  </header>
  <div class="contact-layout">
    <ul class="contact-list">…items with SVG icons…</ul>
    <div class="contact-cta">
      <a class="btn btn-primary btn-large" href="mailto:k.creideiki@gmail.com">Contact Me</a>
    </div>
  </div>
</section>
```

Футер заменён на современный:
```html
<footer class="site-footer">
  <div class="footer-inner">
    <p>© 2026 Nikolay Kiyanovskiy</p>
    <p>All Rights Reserved</p>
  </div>
</footer>
```

Размещено на всех трёх index-страницах (корень, uk/, en/). Удалены старые блоки contact/skills из корневой страницы.

## Стили

- Карточки контактов с иконками, hover-анимация смещения
- Большая кнопка `.btn-large`
- Футер центрирован с отступами

## Проверка

| Проверка | Результат |
|---|---|
| Секция Contact создана | ✅ |
| Email, GitHub, LinkedIn, Telegram с SVG | ✅ |
| Кнопка Contact Me ведёт на ссылку | ✅ |
| Современный футер с нужным текстом | ✅ |
| Работает без JS | ✅ |

**Итог: ALL CHECKS PASSED.**
