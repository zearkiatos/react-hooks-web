FROM node:15-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm

WORKDIR /app

COPY . ./

RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npx browserslist@latest --update-db
RUN npm install nodemon -g --silent
RUN npm install concurrently -g --silent

EXPOSE 3001

ENTRYPOINT ["sh", "./docker/entrypoint.sh"]