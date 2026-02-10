#!/bin/bash
set -e

echo "🚀 Setting up Vue environment..."

# Setup .env
echo "⚙️  Copying .env file..."
docker compose exec -u 1000 frontend cp src/env.example.ts src/env.ts #added -u to make it editable

echo ""
echo "✅ Setup complete!"
echo "🌐 App: http://localhost:5173"