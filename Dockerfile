FROM node:18 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG SHA
ENV SHA=$SHA

CMD ["node", "start"]
