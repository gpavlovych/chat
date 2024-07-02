FROM node:20-alpine AS build
WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

# ### STAGE 2:RUN ###
# # Defining nginx image to be used
# FROM nginx:1.21.1-alpine AS client-browser
# # Copying compiled code and nginx config to different folder
# # NOTE: This path may change according to your project's output folder 

# COPY --from=build /app/dist/chat-ui/browser/ /usr/share/nginx/html
# COPY /nginx.conf /etc/nginx/conf.d/default.conf
# # Exposing a port, here it means that inside the container 
# # the app will be using Port 80 while running

FROM node:20-alpine AS ssr-server
COPY --from=build /app/dist/chat-ui/ ./
CMD ["node", "server/server.mjs"]
EXPOSE 4000