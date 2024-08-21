FROM node:20-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src/ .

EXPOSE 3000

ARG IMAGE_TAG
ENV IMAGE_TAG=$IMAGE_TAG

CMD ["npm", "start"]
