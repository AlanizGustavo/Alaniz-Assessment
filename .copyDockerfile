FROM mcr.microsoft.com/playwright:v1.19.1-focal

WORKDIR /app
RUN apt-get update
COPY package.json .
COPY package-lock.json .

# install using package-lock
RUN npm ci

COPY . .
VOLUME /app/reports
CMD [ "npx", "cucumber-js" ]
