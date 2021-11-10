FROM node:16.13-alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY . /app

RUN yarn add react-scripts@3.4.1 webpack webpack-cli webpack-server -g
RUN yarn


CMD ["yarn","start"]
