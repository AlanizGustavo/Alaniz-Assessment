FROM ubuntu:20.04

# 1. Software / SO

RUN apt-get update && apt-get -y \
    install curl  \
    software-properties-common debian-archive-keyring
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN ln -s /usr/share/keyrings/debian-archive*.gpg /etc/apt/trusted.gpg.d/
RUN add-apt-repository "deb http://http.debian.net/debian/ jessie main contrib non-free" && \
    apt-get update && \
    apt-get -y install nodejs libbrotli1 libgl1 libegl1 libnotify4 libopus0 libxslt1.1 libwoff1 libharfbuzz-icu0 gstreamer1.0-plugins-base libgstreamer1.0-0 libgstreamer-gl1.0-0 gstreamer1.0-plugins-bad libopenjp2-7 libwebpdemux2 libwebp6 libenchant1c2a libsecret-1-0 libhyphen0 libevdev2 libgles2 gstreamer1.0-libav && \
    node -v

# 2. Coniguraciones Software
WORKDIR /app

# 3. Copiar recursos
COPY package.json .
COPY package-lock.json .

# install using package-lock
RUN npm install

COPY . .

# 4. Ejecucion
VOLUME /app/reports
CMD [ "npx", "cucumber-js" ]