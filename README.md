# EVO code — лендинг-визитка инженерной команды

Современный одностраничный сайт для группы разработчиков, которая решает нестандартные задачи: парсинг, интеграции, BI, алгоритмы для производства, DevOps и администрирование Linux.

## Демо

Откройте `index.html` в браузере или разверните через Docker.

## Стек

- HTML5
- CSS3 (Flexbox / Grid, анимации, адаптив)
- Vanilla JavaScript (Intersection Observer, typing-эффект)
- Nginx + Docker

## Структура

```
.
├── index.html          # Главная страница
├── css/
│   └── style.css       # Стили
├── js/
│   └── main.js         # Скрипты
├── Dockerfile          # Сборка контейнера
├── docker-compose.yml  # Запуск на сервере
├── nginx.conf          # Конфиг Nginx
├── .dockerignore       # Исключения для Docker
├── DEPLOY.md           # Инструкция по развёртыванию
└── README.md           # Этот файл
```

## Локальный запуск

```bash
# Просто открыть файл
open index.html

# Или поднять локальный сервер
python3 -m http.server 8080
```

## Запуск в Docker

```bash
docker compose up -d --build
```

Сайт будет доступен по адресу `http://localhost` (или IP сервера).

Подробнее про HTTPS и продакшен-развёртывание — в [`DEPLOY.md`](DEPLOY.md).

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

© EVO code
