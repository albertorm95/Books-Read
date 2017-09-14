FROM node:boron

# Create app directory
RUN echo '---------- Start WORKDIR /usr/src/app ----------'
WORKDIR /usr/src/app
RUN echo '---------- End WORKDIR /usr/src/app ----------'

# Install app dependencies
RUN echo '---------- Start COPY package.json . ----------'
COPY package.json .
RUN echo '---------- End COPY package.json . ----------'

RUN echo '---------- Start COPY angular-src/package.json ./angular-src/ ----------'
COPY angular-src/package.json ./angular-src/
RUN echo '---------- End COPY angular-src/package.json ./angular-src/ ----------'

RUN echo '---------- Start RUN npm install -g @angular/cli ----------'
RUN npm install -g @angular/cli
RUN echo '---------- End RUN npm install -g @angular/cli ----------'

RUN echo '---------- Start RUN npm run modules ----------'
RUN npm run modules
RUN echo '---------- End RUN npm run modules ----------'

# Bundle app source
RUN echo '---------- Start COPY . . ----------'
COPY . .
RUN echo '---------- End COPY . . ----------'

RUN echo '---------- Start EXPOSE 3000 ----------'
EXPOSE 3000
RUN echo '---------- End EXPOSE 3000 ----------'

RUN echo '---------- Start RUN npm run build ----------'
RUN npm run build
RUN echo '---------- End RUN npm run build ----------'

RUN echo '---------- Start CMD npm start ----------'
CMD [ "npm", "start" ]
RUN echo '---------- End CMD npm start ----------'