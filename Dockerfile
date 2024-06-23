FROM node:alpine

WORKDIR /app

COPY src .

EXPOSE 5000

ARG SHA
ENV SHA=$SHA

CMD [ "node", "app.js" ]
