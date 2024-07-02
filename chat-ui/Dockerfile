FROM node:20-alpine AS build
WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

FROM node:20-alpine AS ssr-server
COPY --from=build /app/dist/chat-ui/ ./
CMD ["node", "server/server.mjs"]
EXPOSE 4000