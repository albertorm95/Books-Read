FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY angular-src/package.json ./angular-src/
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install -g @angular/cli

RUN npm run modules

# Bundle app source
COPY . .

EXPOSE 3000
RUN npm run build
CMD [ "npm", "start" ]