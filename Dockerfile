FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Copy packages jsons
COPY package.json .
COPY angular-src/package.json ./angular-src/

# Install app dependencies backend
RUN npm run modules

# Install angular-cli
RUN npm install -g --silent @angular/cli

COPY . .

RUN npm run build

WORKDIR /usr/src/app/

EXPOSE 3000
CMD npm start