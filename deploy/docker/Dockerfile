ARG BASEIMAGE

FROM $BASEIMAGE

# 复制自定义nginx配置
COPY deploy/docker/nginx.conf /etc/nginx/conf.d/default.conf

# 复制构建的静态文件
COPY build /usr/share/nginx/html