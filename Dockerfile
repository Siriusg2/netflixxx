# # Etapa de construcción
# FROM node:18.10 as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build --prod

# # Etapa de producción
# FROM nginx

# # Copia el archivo nginx.conf en la ubicación correcta
# COPY nginx.conf /etc/nginx/nginx.conf

# # Copia los archivos generados en la etapa de construcción al directorio raíz de Nginx
# COPY --from=build /app/dist/ /usr/share/nginx/html

# # Exponer el puerto 80
# EXPOSE 80

# # Comando para iniciar Nginx en modo daemon
# CMD ["nginx", "-g", "daemon off;"]

#stage 1
FROM node:16 AS node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
RUN ls -alt
#stage 2

FROM nginx:1.17.1-alpine
COPY --from=node /usr/src/app/dist/netflix /usr/share/nginx/html
COPY --from=node /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
