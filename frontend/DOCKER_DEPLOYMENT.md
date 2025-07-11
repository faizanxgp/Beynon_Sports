# 🐳 Docker Deployment Guide

## 📋 Summary of Changes Made

### API Configuration Updates:
- **Keycloak URL**: Changed from `localhost:8080` to `96.30.199.117:8080`
- **Flask API URL**: Changed from `localhost:5000` to `96.30.199.117:8000`

### Files Modified:
1. `src/services/api.js` - Updated API base URLs
2. `src/pages/misc/TroubleshootLogin.jsx` - Updated Keycloak URL
3. `vite.config.js` - Added production server configuration

### Docker Files Created:
1. `Dockerfile` - Multi-stage build for production
2. `docker-compose.yml` - Container orchestration
3. `.dockerignore` - Exclude unnecessary files
4. `deploy.sh` - Deployment script

## 🚀 Deployment Instructions

### On Your Ubuntu Server (96.30.199.117):

1. **Install Docker and Docker Compose** (if not already installed):
   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose -y
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   ```

2. **Upload your code to the server**:
   ```bash
   # Using git (recommended)
   git clone your-repository
   cd your-react-app
   
   # Or using scp to copy files
   scp -r ./React-app user@96.30.199.117:/path/to/deployment/
   ```

3. **Make deployment script executable**:
   ```bash
   chmod +x deploy.sh
   ```

4. **Run deployment**:
   ```bash
   ./deploy.sh
   ```

## 🔗 Access Points

After deployment, your application will be available at:
- **React App**: http://96.30.199.117:3000
- **Keycloak**: http://96.30.199.117:8080 (already running)
- **Flask API**: http://96.30.199.117:8000 (already running)

## 🛠 Docker Commands

### View running containers:
```bash
docker ps
```

### View logs:
```bash
docker-compose logs -f
```

### Stop the application:
```bash
docker-compose down
```

### Restart the application:
```bash
docker-compose restart
```

### Rebuild and restart:
```bash
docker-compose up -d --build
```

## 🔍 Troubleshooting

### If the app doesn't start:
1. Check logs: `docker-compose logs`
2. Verify ports are not in use: `sudo netstat -tulpn | grep :3000`
3. Check if Keycloak and Flask API are accessible from the container

### Network connectivity issues:
- Ensure firewall allows port 3000
- Verify Keycloak (8080) and Flask API (8000) are accessible
- Check if services are running: `sudo systemctl status keycloak` (if applicable)

## 📝 Configuration Notes

- The app is configured to connect to Keycloak at `96.30.199.117:8080`
- Flask API is expected at `96.30.199.117:8000`  
- React app will serve on port `3000`
- All configurations are production-ready
- No environment variables needed for basic setup

## 🔄 Updates and Maintenance

To update the application:
1. Pull latest code: `git pull`
2. Rebuild: `docker-compose up -d --build`
3. Check status: `docker ps`

This setup provides a clean, production-ready deployment of your React application! 🎉
