FROM node:20-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG APP_VER
ENV APP_VER=$APP_VER

CMD ["npm", "start"]
