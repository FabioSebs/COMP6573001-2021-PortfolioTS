FROM node:16.13-alpine

WORKDIR /app

COPY . /app

CMD ["yarn","start"]