# Usar imagen base de Node.js
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar código fuente
COPY . .

# Exponer puerto 3000
EXPOSE 3000

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

# Cambiar propietario y usuario
RUN chown -R nodeuser:nodejs /usr/src/app
USER nodeuser

# Comando para iniciar la aplicación
CMD ["npm", "start"]