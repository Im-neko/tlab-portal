### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder

COPY ./front/package.json ./front/package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /myapp && cp -R ./node_modules ./myapp

WORKDIR /myapp

COPY ./front .

## Build the angular app in production mode and store the artifacts in dist folder
ARG REACT_APP_ENV
ARG REACT_APP_REDIRECT_URI
RUN $(npm bin)/react-scripts build 

### STAGE 2: Setup ###
ARG NGINX_CONF

FROM nginx:1.13.3-alpine

RUN mkdir -p /root/www

## Copy our default nginx config
COPY ./front/nginx/$NGINX_CONF /etc/nginx/conf.d/

## Copy build files
COPY --from=builder /myapp/build /root/www

RUN chmod 755 -R /root

CMD ["nginx", "-g", "daemon off;"]
