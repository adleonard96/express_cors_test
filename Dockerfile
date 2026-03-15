FROM --platform=arm64 node:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "start", "--", "--host=0.0.0.0"]