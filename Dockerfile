FROM node:20-alpine AS dependencies
WORKDIR /opt/app
ADD *.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /opt/app
ADD . .
COPY --from=dependencies /opt/app/node_modules ./node_modules
RUN npm run build

FROM node:20-alpine as runner
WORKDIR /opt/app/
ENV NODE_ENV production

COPY --from=builder /opt/app/node_modules ./node_modules
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/*.json ./
COPY --from=builder /opt/app/.next ./.next

EXPOSE 3000
CMD ["npm", "run", "start"]
