FROM node:latest
WORKDIR /usr/src/app

ADD frontend/packages.txt /
RUN chmod +x /packages.txt

ADD frontend/entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]