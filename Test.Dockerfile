FROM node:lts-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install nodemailer

RUN npm install bcrypt

COPY ./ ./

# Add wait-for-it
COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

CMD npm test