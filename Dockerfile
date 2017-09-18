FROM node:boron

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
WORKDIR /usr/src/app/angular-src
RUN node ./angular-src/node_modules/@angular/cli/bin/ng build

WORKDIR /usr/src/app/

EXPOSE 3000
CMD npm start