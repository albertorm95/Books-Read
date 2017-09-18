FROM node:boron

RUN node --version
RUN npm --version

# Create app directory
WORKDIR /usr/src/app

# Copy packages jsons
COPY package.json .
COPY angular-src/package.json ./angular-src/

# Install app dependencies backend
RUN npm --silent install

# Install app dependencies frontend
WORKDIR /usr/src/app/angular-src
RUN npm --silent install

# Bundle app source
WORKDIR /usr/src/app
COPY . .

# Install angular-cli
RUN npm install -g @angular/cli

WORKDIR /usr/src/app/angular-src

RUN ng build

WORKDIR /usr/src/app/

EXPOSE 3000
CMD npm start