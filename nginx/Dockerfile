FROM nginx:1.13.0

RUN mkdir /app

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]