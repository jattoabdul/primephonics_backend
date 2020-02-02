FROM node:10-alpine

ADD . /app
WORKDIR /app
RUN chmod +x start.sh
# Install dependancies
RUN npm install -g sequelize-cli
RUN yarn install

CMD ["./start.sh"]