# Use Node.js Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose frontend port
EXPOSE 3000

# Start Next.js dev server
CMD ["npm", "run", "dev"]
