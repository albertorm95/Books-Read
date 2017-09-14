FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Copy packages jsons
COPY package.json .
COPY angular-src/package.json ./angular-src/

# Install app dependencies backend
RUN npm install --silent

# Install app dependencies frontend
WORKDIR /angular-src
RUN npm install --silent

# Bundle app source
COPY . .

