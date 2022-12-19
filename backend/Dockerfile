FROM node:latest
WORKDIR /usr/src/app

RUN yarn global add @nestjs/cli

ADD backend/packages.txt /
RUN chmod +x /packages.txt

ADD backend/entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]