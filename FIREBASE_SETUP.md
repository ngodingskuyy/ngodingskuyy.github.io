# Firebase Integration Setup

Firebase sudah terintegrasi ke dalam project NgodingSkuyy! 🚀

## 📋 Yang Sudah Disetup:

### 1. **Firebase Configuration**

- ✅ Firebase config file di `src/firebase/config.ts`
- ✅ Environment variables setup di `.env`
- ✅ TypeScript types untuk env variables

### 2. **Firebase Services**

- ✅ **Authentication** - Login/Register dengan email/password
- ✅ **Firestore** - Database untuk projects, members, dll
- ✅ **Storage** - File upload support
- ✅ **Analytics** - Event tracking untuk user behavior

### 3. **Pinia Stores**

- ✅ **Auth Store** - Mengelola authentication state
- ✅ **Locale Store** - Sudah ada untuk internationalization

### 4. **Utilities & Composables**

- ✅ **Firestore Service** - CRUD operations helper
- ✅ **Analytics Composable** - Event tracking helper

## 🔧 Setup Instructions:

### 1. **Firebase Project Configuration**

Buka Firebase project Anda dan copy configuration ke `.env`:

\`\`\`bash

# Copy dari Firebase Console > Project Settings > General > SDK setup and configuration

VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
\`\`\`

### 2. **Enable Firebase Services**

Di Firebase Console, enable services yang diperlukan:

- **Authentication** → Email/Password provider
- **Firestore Database** → Start in production mode
- **Storage** → Start in production mode
- **Analytics** → Enable Google Analytics

### 3. **Firestore Security Rules**

Update Firestore rules di Firebase Console:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
// Projects collection - read public, write authenticated
match /projects/{document} {
allow read: if true;
allow write: if request.auth != null;
}

    // Members collection - read/write authenticated only
    match /members/{document} {
      allow read, write: if request.auth != null;
    }

}
}
\`\`\`

## 📚 Usage Examples:

### 1. **Authentication**

\`\`\`typescript
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Register
await authStore.register('email@example.com', 'password', 'Display Name')

// Login
await authStore.login('email@example.com', 'password')

// Logout
await authStore.logout()

// Check auth status
console.log(authStore.isAuthenticated)
console.log(authStore.user)
\`\`\`

### 2. **Firestore Operations**

\`\`\`typescript
import { ProjectsService } from '@/firebase/firestore'

// Get all projects
const projects = await ProjectsService.getProjects()

// Create new project
const projectId = await ProjectsService.createProject({
name: 'New Project',
description: 'Project description',
technologies: ['Vue.js', 'Firebase'],
githubUrl: 'https://github.com/...'
})

// Update project
await ProjectsService.updateProject(projectId, {
description: 'Updated description'
})
\`\`\`

### 3. **Analytics Tracking**

\`\`\`typescript
import { useAnalytics } from '@/composables/useAnalytics'

const { trackEvent, trackPageView, trackJoinCommunity } = useAnalytics()

// Track page view
trackPageView('About Page')

// Track custom event
trackEvent('button_click', { button_name: 'Join Discord' })

// Track community join
trackJoinCommunity('hero_section')
\`\`\`

## 🔒 Security Notes:

1. **Environment Variables**: File `.env` sudah di-gitignore untuk keamanan
2. **Firestore Rules**: Pastikan rules sudah disetup dengan benar
3. **Authentication**: Gunakan Firebase Auth untuk proteksi routes
4. **API Keys**: Firebase API keys aman untuk public client apps

## 🚀 Next Steps:

1. ✅ Copy Firebase config ke `.env`
2. ✅ Enable Firebase services di console
3. ✅ Setup Firestore security rules
4. ✅ Test authentication flow
5. ✅ Add more collections as needed

Firebase integration sudah siap digunakan! 🎉
