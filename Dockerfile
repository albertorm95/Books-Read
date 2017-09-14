FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Copy packages jsons
COPY package.json .
COPY angular-src/package.json ./angular-src/

# Install app dependencies backend
RUN npm install --silent && cd angular-src && npm install --silent

# Bundle app source
COPY . .

# Install angular-cli
RUN sudo npm install -g --silent @angular/cli

RUN cd angular-src && ng build

EXPOSE 3000
CMD [ "npm", "start" ]