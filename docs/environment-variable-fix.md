# Environment Variable Loading Fix

## 🚨 Critical Issue Resolved

**Problem**: Firestore connection errors with HTTP 400 status codes on production deployment.

**Symptoms**:

- `Failed to load resource: the server responded with a status of 400`
- `WebChannelConnection RPC 'Listen' stream transport errored`
- `Uncaught FirebaseError: Firebase: Error (auth/invalid-api-key)`

## 🔍 Root Cause Analysis

**Primary Issue**: Vite was not properly loading environment variables from `.env` file during production builds, causing Firebase configuration to contain empty strings instead of actual credentials.

**Technical Details**:

- Environment variables existed in `.env` file
- Variables loaded correctly in development mode
- Production builds failed to include environment variables
- Firebase services received invalid/empty configuration

## ✅ Solution Implemented

### 1. **Enhanced Vite Configuration**

Modified `vite.config.ts` to explicitly load and inject environment variables:

```typescript
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/',
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    define: {
      // Explicitly define environment variables for Firebase
      'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(env.VITE_FIREBASE_API_KEY),
      'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
      'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
      'import.meta.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(
        env.VITE_FIREBASE_STORAGE_BUCKET,
      ),
      'import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
        env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      ),
      'import.meta.env.VITE_FIREBASE_APP_ID': JSON.stringify(env.VITE_FIREBASE_APP_ID),
      'import.meta.env.VITE_FIREBASE_MEASUREMENT_ID': JSON.stringify(
        env.VITE_FIREBASE_MEASUREMENT_ID,
      ),
    },
  }
})
```

### 2. **Fixed Vitest Integration**

Updated `vitest.config.ts` to handle functional Vite config:

```typescript
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig({ command: 'build', mode: 'test' }),
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
```

## 🧪 Verification Process

### Build-time Verification

```bash
# Environment variables now load correctly during build
npm run build
# ✅ Build output shows successful environment variable loading
```

### Deployment Verification

```bash
# Deploy to Firebase Hosting
firebase deploy --only hosting
# ✅ Deployment successful
# ✅ Site: https://ngodingskuyy.web.app
```

### Runtime Verification

- ✅ Firebase services initialize properly
- ✅ No `auth/invalid-api-key` errors
- ✅ Firestore connections succeed (200 status codes)
- ✅ WebChannel RPC connections work correctly

## 📋 Environment Variables Required

Ensure your `.env` file contains all Firebase configuration:

```env
# Firebase Configuration for NgodingSkuyy
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=ngodingskuyy-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ngodingskuyy-id
VITE_FIREBASE_STORAGE_BUCKET=ngodingskuyy-id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=140840415909
VITE_FIREBASE_APP_ID=1:140840415909:web:446eb243c5f982bf88534c
VITE_FIREBASE_MEASUREMENT_ID=G-FJDWL4TDR7

# Development Settings
NODE_ENV=development
```

## 🎯 Key Learnings

### Technical Insights

1. **Vite Environment Loading**: Default Vite behavior doesn't guarantee environment variable availability in all build scenarios
2. **Static Hosting Limitations**: Firebase Hosting requires environment variables to be embedded at build time
3. **Production vs Development**: Environment variable behavior can differ significantly between modes
4. **Explicit Configuration**: Critical configuration values should be explicitly defined in Vite config

### Best Practices

1. **Always Test Production Builds**: Verify environment variables in production builds before deployment
2. **Explicit Environment Loading**: Use `loadEnv()` and `define` options for critical configuration
3. **Build Verification**: Check build output to ensure configuration values are embedded
4. **Error Handling**: Implement proper fallbacks for missing environment variables

## 🚀 Deployment Status

| Component                 | Status      | Notes                                   |
| ------------------------- | ----------- | --------------------------------------- |
| **Environment Loading**   | ✅ Fixed    | Vite now explicitly loads all variables |
| **Build Process**         | ✅ Working  | No TypeScript or build errors           |
| **Firebase Config**       | ✅ Valid    | All services initialize correctly       |
| **Production Deployment** | ✅ Live     | https://ngodingskuyy.web.app            |
| **Firestore Connection**  | ✅ Active   | HTTP 200 responses                      |
| **Error Resolution**      | ✅ Complete | No auth/invalid-api-key errors          |

## 🔒 Security Notes

- Environment variables are embedded in the client-side bundle (this is expected for Vite frontend apps)
- Firebase client configuration is safe to expose (API keys have domain restrictions)
- Sensitive server-side operations should use Firebase Admin SDK with private keys

---

**Status**: ✅ **RESOLVED**  
**Date**: August 6, 2025  
**Sites**: ngodingskuyy.web.app, ngodingskuyy.github.io  
**Firebase Project**: ngodingskuyy-id
