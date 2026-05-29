FROM node:20-alpine

RUN groupadd -r setup && useradd -r -g setup -u 1000 setup

WORKDIR /app

COPY --chown=setup:setup server.js .

USER setup

EXPOSE 8080

CMD ["node", "server.js"]