# Multi-stage Dockerfile optimized for Google Cloud Run
# Stage 1: Build the frontend bundle
FROM node:22-slim AS builder

WORKDIR /app

# Copy package manifests for cached dependency installation
COPY package*.json ./

# Install all dependencies including build tools
RUN npm ci --legacy-peer-deps

# Copy application source code
COPY index.html tsconfig.json vite.config.ts server.ts ./
COPY src/ ./src/

# Build static production assets into /app/dist
RUN npm run build

# -------------------------------------------------------------
# Stage 2: Production runner image
FROM node:22-slim AS runner

WORKDIR /app

# Production environment configurations
ENV NODE_ENV=production
ENV PORT=8080

# Copy package manifests and install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev --legacy-peer-deps && npm cache clean --force

# Copy pre-built frontend distribution from the builder stage
COPY --from=builder /app/dist ./dist

# Copy production backend server
COPY --from=builder /app/server.ts ./server.ts

# Use non-root node user provided by the base image for security
USER node

# Cloud Run dynamically assigns the PORT variable (default: 8080)
EXPOSE 8080

# Launch server with Node.js 22 built-in TypeScript execution
CMD ["node", "server.ts"]
