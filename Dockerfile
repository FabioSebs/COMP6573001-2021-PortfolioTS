FROM node:15

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN yarn
RUN yarn add react-scripts@3.4.1 -g 

COPY . ./

CMD ["yarn","start"]