# Лог работ — Featured Projects

## Задача

Секция Featured Projects, ссылка Projects ведёт на неё. Карточки с hover-эффектом: при наведении изображение блюрится, появляется описание, технологии, кнопки. Адаптивная сетка, карточки одинаковой высоты, место под изображение.

## Проекты

1. **GardenPay** — Система учета садового товарищества. Технологии: React, TypeScript, PostgreSQL, Supabase. Live Demo: https://garden-pay-seven.vercel.app/, GitHub: https://github.com/Nick-Kiianovskyi/GardenPay
2. **Migration-Data-Analyzer** — Data migration analyzer... comparing datasets before/after migration. React, TypeScript, Node.js, Express, Vite. Demo: https://migrato-five.vercel.app/, GitHub: https://github.com/Nick-Kiianovskyi/Migration-Data-Analyzer
3. **Memorii** — Платформа для хранения личных знаний и воспоминаний. React, Node.js, PostgreSQL. Demo: https://memorii-gamma.vercel.app/, GitHub: https://github.com/Nick-Kiianovskyi/memorii
4. **Schedule To ICS** — Конвертер учебных расписаний из Excel в Google Calendar. Python, OpenPyXL. Demo: https://conv-schedule.vercel.app/, GitHub: https://github.com/Nick-Kiianovskyi/Conv_schedule
5. **NAIAN** — Regional News Intelligence Platform. React 19, TypeScript, Vite, TanStack Query, React Router, FastAPI, Python, SQLAlchemy, PostgreSQL (Supabase), Celery/APScheduler, RSS + BeautifulSoup, OpenAI API, Vercel + Railway. Demo: https://conv-schedule.vercel.app/, GitHub: https://github.com/Nick-Kiianovskyi/NAIAN
6. **Railway Carrier Document Adaptation System** — Automated adaptation of railway transportation acts received from carriers. Excel, VBA, SQL. GitHub: https://github.com/Nick-Kiianovskyi

## Разметка

Секция `class="featured" id="projects"` с `aria-labelledby="featured-heading"`. Каждая карточка — `<article class="project-card">` с:
- `<figure class="project-media">` — `<img>` + `<figcaption class="project-overlay">` (описание, теги, действия)
- `<div class="project-header">` — название проекта

Ссылка «Проєкти» в навигации ведёт на `index.html#projects`.

## Стили (css/style.css)

- **Карточки одинаковой высоты:** grid `grid-template-rows: 1fr auto`, карточки в сетке растягиваются.
- **Адаптивная сетка:** 1 колонка на 320px, 2 на ≥768px, 3 на ≥1280px.
- **Место под изображение:** `min-height: 14rem`, `object-fit: cover`.
- **Hover-анимации:** на hover `translateY(-6px)`, тень, изменение границы. Изображение получает `filter: blur(6px) brightness(0.7)` и `scale(1.02)`. Оверлей появляется с плавностью, кнопки остаются кликабельными (`pointer-events: auto`).
- **Доступность:** добавлен `:focus-within` для показа оверлея при фокусе.

## Проверка

| Проверка | Результат |
|---|---|
| Секция Featured Projects создана | ✅ |
| Ссылка Projects ведёт на секцию | ✅ |
| 6 карточек с проектами | ✅ |
| Красивые карточки с изображением | ✅ |
| При наведении фото блюрится, выводится описание, технологии, кнопки | ✅ |
| Карточки одинаковой высоты | ✅ |
| Адаптивная сетка | ✅ |
| Место под изображение | ✅ |
| Hover-анимации | ✅ |
| Без JS и inline-стилей | ✅ |

**Итог: ALL CHECKS PASSED.**
