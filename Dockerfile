FROM node

WORKDIR /app

COPY . .

RUN npm install

#ENV MYPORT 3000    
EXPOSE 3000               

CMD ["npm","start"]