FROM node:16.15-alpine3.15 as builder
WORKDIR /opt/client
COPY . .
RUN yarn
RUN yarn build

FROM nginx:1.21.6-alpine
WORKDIR /var/www/html

COPY --from=builder /opt/client/dist ./client
