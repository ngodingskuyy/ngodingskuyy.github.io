#!/bin/bash

# NgodingSkuyy Firebase Deployment Script
echo "🚀 Starting Firebase deployment for NgodingSkuyy..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Please install it with: npm install -g firebase-tools"
    exit 1
fi

# Check if logged in to Firebase
if ! firebase projects:list &> /dev/null; then
    echo "❌ Not logged in to Firebase. Please run: firebase login"
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"
else
    echo "❌ Build failed"
    exit 1
fi

# Deploy to Firebase
echo "🌐 Deploying to Firebase Hosting..."
firebase deploy --only hosting:main

if [ $? -eq 0 ]; then
    echo "🎉 Deployment completed successfully!"
    echo "🔗 Your site is live at: https://your-project-id.web.app"
else
    echo "❌ Deployment failed"
    exit 1
fi
