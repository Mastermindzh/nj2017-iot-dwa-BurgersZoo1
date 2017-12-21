FROM node:latest
MAINTAINER "Rick van Lieshout <info@rickvanlieshout.com>"

ENV HOME=/app
RUN mkdir $HOME
VOLUME [/app]
WORKDIR $HOME

# install
RUN apt-get update
RUN apt-get install -y sox
RUN apt-get install -y libsox-fmt-all

# make sure nodemon is installed, even when not supplied in the package .json
RUN npm install nodemon

CMD npm install && npm run build
