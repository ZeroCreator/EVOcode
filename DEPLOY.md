# Развёртывание EVO code landing

## Быстрый старт

```bash
# 1. Клонировать/загрузить проект на сервер
cd /opt/evocode

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

## HTTPS (Let's Encrypt)

1. В `docker-compose.yml` раскомментируйте блок `volumes`.
2. Замените `server_name _;` в `nginx.conf` на свой домен.
3. Выпустите сертификат:

```bash
docker run -it --rm \
  -v /opt/evocode/certbot/conf:/etc/letsencrypt \
  -v /opt/evocode/certbot/www:/var/www/certbot \
  -p 80:80 \
  certbot/certbot certonly --standalone -d ваш.домен
```

4. Обновите `nginx.conf` для 443 порта и перезапустите:

```bash
docker compose restart
```

## Порты

- `80` — HTTP
- `443` — HTTPS (после настройки certbot)
