FROM node:alpine

WORKDIR /app

COPY src .

EXPOSE 8080

ARG SHA
ENV SHA=$SHA

CMD [ "node", "app.js" ]