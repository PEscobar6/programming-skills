FROM node:10-alpine3.11
RUN mkdir /app
WORKDIR /app
ENV TZ=America/Bogota
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install pm2 -g
COPY package.json /app
RUN npm install
COPY . /app
CMD ["pm2-runtime", "index.js", "--watch"]
EXPOSE 3000 
