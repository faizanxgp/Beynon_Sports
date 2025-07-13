# Use official Prometheus image as base
FROM prom/prometheus:latest

# Set working directory
WORKDIR /etc/prometheus

# Copy configuration file
COPY prometheus.yml .

# Create data directory
RUN mkdir -p /prometheus/data

# Expose port
EXPOSE 9090

# Set environment variables
ENV PROMETHEUS_STORAGE_PATH=/prometheus/data
ENV PROMETHEUS_CONFIG_FILE=/etc/prometheus/prometheus.yml

# Command to run Prometheus
CMD ["--config.file=/etc/prometheus/prometheus.yml", \
     "--storage.tsdb.path=/prometheus/data", \
     "--web.console.libraries=/etc/prometheus/console_libraries", \
     "--web.console.templates=/etc/prometheus/consoles", \
     "--storage.tsdb.retention.time=200h", \
     "--web.enable-lifecycle"]