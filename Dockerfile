FROM node:18-alpine

WORKDIR /usr/app
COPY package.json .
COPY . .
EXPOSE 3000
RUN npm install
CMD npm run dev
# 