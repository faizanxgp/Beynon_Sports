# Use official nginx image as base
FROM nginx:alpine

# Set working directory
WORKDIR /etc/nginx

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Use default nginx entrypoint
CMD ["nginx", "-g", "daemon off;"]