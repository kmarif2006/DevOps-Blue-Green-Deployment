FROM node:20-alpine
WORKDIR /app
COPY *.json /app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node","server.js"]