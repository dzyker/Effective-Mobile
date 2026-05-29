FROM node:20-alpine

RUN addgroup -S setup && adduser -S -G setup -u 2000 setup

WORKDIR /app

COPY --chown=setup:setup server.js .

USER setup

EXPOSE 8080

CMD ["node", "server.js"]