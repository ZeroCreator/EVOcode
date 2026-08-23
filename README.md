# evoxide — лендинг-визитка инженерной команды

Современный одностраничный сайт для группы разработчиков, которая решает нестандартные задачи: парсинг, интеграции, BI, алгоритмы для производства, DevOps и администрирование Linux.

## Стек

- HTML5 / CSS3 / Vanilla JS
- Caddy + Docker

## Структура

```
.
├── index.html              # Главная страница
├── styles.css              # Стили
├── scripts.js              # Клиентские скрипты
├── favicon.ico             # Favicon
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── Caddyfile               # Конфигурация Caddy
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Локальная разработка

Откройте `index.html` в браузере или используйте любой статический сервер:

```bash
python3 -m http.server 8080
```

Сайт будет доступен по адресу `http://localhost:8080`.

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
