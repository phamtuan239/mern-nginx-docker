FROM nginx

RUN rm /usr/share/nginx/html/*

EXPOSE 80

COPY ./default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]