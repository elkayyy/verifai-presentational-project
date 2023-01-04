FROM node:12
COPY package.json .
RUN npm install
RUN npm update
COPY . .
EXPOSE 3000
CMD ["npm", "start"]