# Развёртывание evoxide-landing

Сайт — статический HTML/CSS/JS, раздаётся Caddy в Docker.

## Быстрый старт

```bash
# 1. Загрузить проект на сервер
cd /evoxide

# 2. Собрать и запустить
docker compose up -d --build

# 3. Проверить
# Открыть в браузере http://<IP_сервера>
```

## Управление

```bash
docker compose logs -f          # смотреть логи
docker compose down             # остановить
docker compose up -d --build    # пересобрать после изменений
```

## Обновление сайта

```bash
cd /evoxide
git pull origin main   # или загрузить новые файлы
docker compose up -d --build
```

## HTTPS (Let's Encrypt)

1. Замените домен в `Caddyfile` при необходимости.
2. Выпустите сертификат:

```bash
docker run -it --rm \
  -v /opt/evoxide/certbot/conf:/etc/letsencrypt \
  -v /opt/evoxide/certbot/www:/var/www/certbot \
  -p 80:80 \
  certbot/certbot certonly --standalone -d ваш.домен
```

3. Обновите `Caddyfile` для 443 порта и перезапустите:

```bash
docker compose restart
```

## Порты

- `80` — HTTP
- `443` — HTTPS (после настройки certbot)
