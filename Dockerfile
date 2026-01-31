FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/build ./build
COPY --from=builder /app/static ./static

EXPOSE 5002

ENV PORT=5002
ENV HOST=0.0.0.0
ENV NODE_ENV=production

CMD ["node", "build"]

