# Prepare two environments
# 0. where the application is built
# 1. where the application is run
# https://cloud.google.com/community/tutorials/deploy-react-nginx-cloud-run
# https://www.youtube.com/watch?v=Sm8GbC02MlE

# 0. build environment
FROM node:alpine as build-stage
FROM node:18.16.0-alpine
# any dir you want actually
WORKDIR /app
COPY package.json .
# prepare the container for building react
RUN npm install
# copy the react app to the container to a random dir /app
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
