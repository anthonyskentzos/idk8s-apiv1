FROM node:alpine

WORKDIR /app

COPY src .

EXPOSE 8080

CMD [ "node", "app.js" ]