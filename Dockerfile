FROM node:latest
RUN mkdir /usr/src/service
COPY . /usr/src/service
CMD ["node", "/usr/src/service/app.js"]