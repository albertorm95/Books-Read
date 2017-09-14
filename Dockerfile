FROM node:boron

RUN ["/bin/pwd"]
RUN ["/bin/ls"]

# Create app directory
WORKDIR /usr/src/app
RUN ["/bin/pwd"]
RUN ["/bin/ls"]

# Copy packages jsons
COPY package.json .

COPY angular-src/package.json ./angular-src/
RUN ["/bin/pwd"]
RUN ["/bin/ls"]

# Install app dependencies backend
RUN npm install

WORKDIR /usr/src/app/angular-src
RUN ["/bin/pwd"]
RUN ["/bin/ls"]


RUN npm install
RUN ["/bin/pwd"]
RUN ["/bin/ls"]

# Bundle app source
WORKDIR /usr/src/app
RUN ["/bin/pwd"]
RUN ["/bin/ls"]
COPY . .
RUN ["/bin/pwd"]
RUN ["/bin/ls"]

# Install angular-cli
RUN npm install -g --silent @angular/cli

WORKDIR /usr/src/app/angular-src
RUN ["/bin/pwd"]
RUN ["/bin/ls"]

RUN ng build

EXPOSE 3000
CMD npm start