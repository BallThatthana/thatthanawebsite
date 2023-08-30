# Stage 1: Build the UI
FROM node:14.18.1 AS ui-build
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Build the server
FROM node:14.18.1 AS server-build
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY server ./server/

# Stage 3: Create the production image
FROM node:14.18.1 AS production
WORKDIR /usr/src/app
COPY --from=ui-build /usr/src/app/build ./public/
COPY --from=server-build /usr/src/app/server ./server/
COPY package.json .
RUN npm ci --only=production
EXPOSE 3000
EXPOSE 4000
CMD ["node", "server/index.js"]
