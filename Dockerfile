# Prepare two environments
# 0. where the application is built
# 1. where the application is run
# https://cloud.google.com/community/tutorials/deploy-react-nginx-cloud-run
# https://www.youtube.com/watch?v=Sm8GbC02MlE

# 0. build environment
FROM node:alpine as build-stage
# any dir you want actually
WORKDIR /app
# copy the react app to the container to a random dir /app
COPY . /app/
# prepare the container for building react
RUN npm i
RUN npm i react-scripts@latest -g
RUN ENDPOINT="https://graphql.cronide.com"
RUN npm run build

# at this point we could use the serve command
# serve -s build
# to have it running on node under build/server.js
# but we want to run it on nginx, so we do a next stage

# 1. server environment
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]