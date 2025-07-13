# Use official Qdrant image as base
FROM qdrant/qdrant:latest

# Set working directory
WORKDIR /qdrant

# Create storage directory
RUN mkdir -p /qdrant/storage

# Set environment variables for Qdrant configuration
ENV QDRANT__SERVICE__HTTP_PORT=6333
ENV QDRANT__SERVICE__GRPC_PORT=6334
ENV QDRANT__LOG_LEVEL=INFO
ENV QDRANT__STORAGE__STORAGE_PATH=/qdrant/storage

# Expose ports
EXPOSE 6333 6334

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:6333/health || exit 1

# Use the default Qdrant entrypoint
CMD ["./qdrant"]