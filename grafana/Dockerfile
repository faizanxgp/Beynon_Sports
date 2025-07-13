# Use official Grafana image as base
FROM grafana/grafana:latest

# Set working directory
WORKDIR /var/lib/grafana

# Set environment variables
ENV GF_SECURITY_ADMIN_PASSWORD=admin
ENV GF_SECURITY_ADMIN_USER=admin
ENV GF_USERS_ALLOW_SIGN_UP=false
ENV GF_INSTALL_PLUGINS=grafana-piechart-panel,grafana-worldmap-panel

# Create necessary directories
RUN mkdir -p /var/lib/grafana/dashboards
RUN mkdir -p /var/lib/grafana/provisioning/datasources
RUN mkdir -p /var/lib/grafana/provisioning/dashboards

# Copy datasource configuration
COPY datasource.yml /etc/grafana/provisioning/datasources/

# Set proper permissions (grafana user is already configured in base image)

# Expose port
EXPOSE 3000

# Use default Grafana entrypoint
USER grafana
CMD ["/run.sh"]