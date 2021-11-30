FROM mysql:8.0.17
ENV TZ=America/Bogota
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ADD person.sql /docker-entrypoint-initdb.d

EXPOSE 3306
