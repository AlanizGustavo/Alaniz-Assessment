FROM mcr.microsoft.com/playwright:v1.19.1-focal

WORKDIR /app
COPY . .
RUN apt-get update
RUN npm install -y
#VOLUME /reports
CMD [ "npx", "cucumber-js" ]
