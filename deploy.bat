@echo off
echo 🚀 Starting Firebase deployment for NgodingSkuyy...

REM Check if Firebase CLI is installed
firebase --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Firebase CLI not found. Please install it with: npm install -g firebase-tools
    exit /b 1
)

REM Build the project
echo 📦 Building project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed
    exit /b 1
)

echo ✅ Build completed successfully

REM Deploy to Firebase
echo 🌐 Deploying to Firebase Hosting...
call firebase deploy --only hosting:main

if %errorlevel% neq 0 (
    echo ❌ Deployment failed
    exit /b 1
)

echo 🎉 Deployment completed successfully!
echo 🔗 Your site is live!
pause
