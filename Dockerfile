FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Copy packages jsons
COPY package.json .
COPY angular-src/package.json ./angular-src/

# Install app dependencies
RUN npm run modules
RUN npm install -g --silent @angular/cli

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]