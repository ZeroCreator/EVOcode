# evoxide — лендинг-визитка инженерной команды

Современный одностраничный сайт для группы разработчиков, которая решает нестандартные задачи: парсинг, интеграции, BI, алгоритмы для производства, DevOps и администрирование Linux.

Собран на [Astro](https://astro.build/).

## Стек

- [Astro](https://astro.build/) — статический сайт-билдер
- HTML5 / CSS3 / Vanilla JS
- Nginx + Docker

## Структура

```
.
├── src/
│   ├── components/     # UI-блоки (Hero, Cases, Contacts и т.д.)
│   ├── layouts/        # Базовый Layout
│   ├── pages/          # Страницы
│   ├── scripts/        # Клиентские скрипты
│   └── styles/         # Глобальные стили
├── public/             # Статические файлы
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── astro.config.mjs
├── package.json
└── README.md
```

## Локальная разработка

Требуется Node.js >= 18.17.

```bash
npm install
npm run dev
```

Сайт будет доступен по адресу `http://localhost:4321`.

## Сборка

```bash
npm run build
```

Результат сборки попадает в папку `dist/`.

## Развёртывание через Docker

```bash
docker compose up -d --build
```

Контейнер поднимается на порту `80`.

Подробнее про продакшен, HTTPS и обновления — в [`DEPLOY.md`](DEPLOY.md).

## Что можно доработать

- Заменить контакты-заглушки на реальные
- Добавить блок с цифрами и результатами проектов
- Добавить отзывы клиентов
- Подключить аналитику (Яндекс.Метрика / Google Analytics)
- Настроить SSL через Let's Encrypt

## Контакты

- Telegram: @ваш_ник
- WhatsApp: +7 XXX XXX XX-XX
- Email: ваш@почта.ру

© evoxide
