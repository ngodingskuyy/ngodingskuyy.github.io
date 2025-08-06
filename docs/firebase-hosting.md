# Firebase Hosting Setup & Deployment Guide

## 🚀 Firebase Hosting Configuration

### Current Configuration (`firebase.json`)

```json
{
  "hosting": {
    "target": "main",                    // Target ngodingskuyy.web.app
    "public": "dist",                    // Vite build output directory
    "ignore": [...],                     // Files to ignore during deployment
    "rewrites": [...],                   // SPA routing support
    "headers": [...],                    // Caching optimization
    "cleanUrls": true,                   // Remove .html extensions
    "trailingSlash": false              // Consistent URL format
  }
}
```

## 📦 Key Updates Made

### 1. **Build Directory**

- ✅ Changed from `"public"` to `"dist"` (Vite build output)

### 2. **Caching Headers**

- ✅ Static assets (JS/CSS): 1 year cache (`max-age=31536000`)
- ✅ Images: 1 year cache for optimal performance
- ✅ index.html: No cache for immediate updates

### 3. **SPA Support**

- ✅ All routes redirect to `/index.html` for Vue Router
- ✅ Clean URLs without `.html` extensions

## 🛠️ Deployment Options

### Option 1: NPM Scripts (Recommended)

```bash
# Build and deploy to Firebase
npm run deploy:firebase

# Login to Firebase (first time only)
npm run firebase:login

# Test locally before deploy
npm run firebase:serve
```

### Option 2: Manual Commands

```bash
# Build project
npm run build

# Deploy to Firebase (ngodingskuyy.web.app)
firebase deploy --only hosting:main
```

### Option 3: Deployment Scripts

```bash
# Linux/Mac
./deploy.sh

# Windows
deploy.bat
```

## 🔧 Initial Firebase Setup

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
# atau
npm run firebase:login
```

### 3. Initialize Firebase (if needed)

```bash
firebase init hosting
# atau
npm run firebase:init
```

### 4. Select your Firebase project

```bash
firebase use --add
```

## 🌐 Performance Optimizations

### Caching Strategy

- **Static Assets**: 1 year cache untuk JS, CSS, images
- **HTML Files**: No cache untuk immediate updates
- **Clean URLs**: Better SEO dan user experience

### Firebase Features Enabled

- ✅ **Hosting**: Static file serving
- ✅ **Performance**: Monitoring (integrated)
- ✅ **Analytics**: User tracking (integrated)
- ✅ **Auth**: User authentication (integrated)
- ✅ **Firestore**: Database (integrated)

## 🚀 Deployment Process

### Automatic Build Process

1. **Type Check**: `vue-tsc --build`
2. **Build**: `vite build` → creates `dist/` folder
3. **Deploy**: `firebase deploy --only hosting:main`

### Deployment Output

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # Main JS bundle
│   ├── index-[hash].css    # Main CSS bundle
│   └── AboutView-[hash].js # Lazy-loaded components
└── [other assets]
```

## 🔍 Testing Before Deploy

### Local Testing

```bash
# Build and test locally
npm run build
npm run preview

# Test with Firebase emulator
npm run firebase:serve
```

### Pre-deployment Checklist

- ✅ Build berhasil tanpa error
- ✅ Performance tracking implemented
- ✅ Firebase config valid
- ✅ All routes working (SPA routing)
- ✅ Assets loading correctly

## 🌟 Post-Deployment

### Verify Deployment

1. **Live Site**: Check Firebase Hosting URL
2. **Performance**: Monitor Firebase Performance Console
3. **Analytics**: Check Firebase Analytics
4. **Errors**: Monitor Firebase Console for issues

### Firebase Console URLs

- **Hosting**: `https://console.firebase.google.com/project/YOUR_PROJECT/hosting`
- **Performance**: `https://console.firebase.google.com/project/YOUR_PROJECT/performance`
- **Analytics**: `https://console.firebase.google.com/project/YOUR_PROJECT/analytics`

## 🛡️ Security & Best Practices

### Headers Configuration

- ✅ Proper caching for static assets
- ✅ No cache for HTML to ensure updates
- ✅ Clean URLs for better SEO

### Performance

- ✅ Gzipped assets
- ✅ Code splitting (lazy loading)
- ✅ Optimized images
- ✅ Firebase Performance monitoring

## 🐛 Troubleshooting

### Common Issues

1. **404 on refresh**: Check `rewrites` configuration
2. **Old content**: Clear browser cache
3. **Build errors**: Check TypeScript errors
4. **Firebase errors**: Check project permissions

### Debug Commands

```bash
# Check Firebase status
firebase projects:list

# Test build locally
npm run preview

# Check Firebase hosting
firebase hosting:channel:list
```
