FROM keymetrics/pm2:8-stretch

ENV WORKDIR=/home/app

ADD . .
RUN npm install
RUN npm run build

# EXPOSE 8080

CMD [ "pm2-runtime", "start", "pm2.config.js" ]
