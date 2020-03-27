# Pull official base image
FROM node:13.10-buster-slim

# Set working directory
WORKDIR /usr/src/todo-spa

# Install and cache the app dependencies
COPY package.json /usr/src/todo-spa/package.json
RUN yarn install
RUN yarn global add @vue/cli@4.2.3

# Start the app
CMD ["yarn", "serve", "--mode", "dev"]