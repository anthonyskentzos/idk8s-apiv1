FROM node:20-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG SHA
ENV SHA=$SHA

CMD ["npm", "start"]
