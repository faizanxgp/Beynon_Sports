#!/bin/bash

# Production deployment script for Ubuntu server
# Run this script on your Ubuntu server at 96.30.199.117

echo "🚀 Starting React App Deployment..."

# Stop and remove existing containers
echo "📦 Stopping existing containers..."
docker-compose down

# Remove old images (optional - uncomment if you want to clean up)
# docker image prune -f

# Build and start the new container
echo "🔨 Building and starting new container..."
docker-compose up -d --build

# Show running containers
echo "✅ Deployment complete! Running containers:"
docker ps

echo "🌐 Your React app should now be available at:"
echo "   http://96.30.199.117:3000"

echo "📊 To view logs, run: docker-compose logs -f"
echo "🛑 To stop the app, run: docker-compose down"
