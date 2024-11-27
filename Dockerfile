# Build Stage
FROM node:22-alpine AS buildimage
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Production Stage
FROM node:22-alpine AS production
WORKDIR /app
COPY --from=buildimage /app/package*.json ./
COPY --from=buildimage /app/yarn.lock ./
COPY --from=buildimage /app/.next ./.next
COPY --from=buildimage /app/public ./public
COPY --from=buildimage /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["yarn", "start"]
