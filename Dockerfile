FROM node:16.18.1


WORKDIR /app/

COPY . .

EXPOSE 80

CMD ["pm2-runtime", "ecosystem.config.js"]