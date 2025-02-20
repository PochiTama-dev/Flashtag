# Usa una imagen base ligera de Node.js
FROM node:16-alpine

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./

# Instala las dependencias (en una capa separada para optimización de caché)
RUN npm install --production

# Copia el resto del código fuente
COPY . .

# Configuración del puerto a exponer (asegúrate de que coincida con el puerto del backend)
EXPOSE 8006

# Comando de inicio
CMD ["node", "app.js"]
