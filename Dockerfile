FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY index.html styles.css scripts.js /usr/share/caddy/
COPY favicon.ico favicon-16x16.png favicon-32x32.png apple-touch-icon.png /usr/share/caddy/
COPY png /usr/share/caddy/png

EXPOSE 80 443

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
