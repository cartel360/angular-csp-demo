# Stage 1: Build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
RUN ls -la /app/dist  # Debug: List files

# Stage 2: Serve with Nginx + CSP
FROM nginx:alpine
COPY --from=build /app/dist/angular-csp-demo /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80