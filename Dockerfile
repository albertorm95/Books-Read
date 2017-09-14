FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Copy packages jsons
COPY package.json .
COPY angular-src/package.json ./angular-src/

# Install app dependencies backend
RUN npm install --silent

# Install app dependencies frontend
RUN cd angular-src && npm install --silent

# Bundle app source
COPY . .

