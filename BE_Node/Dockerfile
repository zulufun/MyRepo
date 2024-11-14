FROM node:20.2-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --productison
COPY . .
EXPOSE 8000
CMD ["npm", "start"]

