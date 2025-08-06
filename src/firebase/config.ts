import { initializeApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { getStorage, type FirebaseStorage } from 'firebase/storage'
import { getAnalytics, type Analytics } from 'firebase/analytics'
import { getPerformance, type FirebasePerformance } from 'firebase/performance'
import type { FirebaseApp } from 'firebase/app'

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ''
}

// Check if Firebase is properly configured
const isFirebaseConfigured = Object.values(firebaseConfig).every(value => value !== '')

let app: FirebaseApp | null = null
let auth: Auth | null = null
let db: Firestore | null = null
let storage: FirebaseStorage | null = null
let analytics: Analytics | null = null
let performance: FirebasePerformance | null = null

if (isFirebaseConfigured) {
  try {
    // Initialize Firebase
    app = initializeApp(firebaseConfig)

    // Initialize Firebase services
    auth = getAuth(app)
    db = getFirestore(app)
    storage = getStorage(app)

    // Initialize Analytics (only in production and in browser environment)
    if (typeof window !== 'undefined' && import.meta.env.PROD) {
      analytics = getAnalytics(app)
    }

    // Initialize Performance (only in production)
    if (import.meta.env.PROD) {
      performance = getPerformance(app)
    }

    console.log('✅ Firebase initialized successfully')
  } catch (error) {
    console.warn('⚠️ Firebase initialization failed:', error)
  }
} else {
  console.warn('⚠️ Firebase not configured. Please set up environment variables.')
  console.log('📝 Create a .env file with your Firebase configuration')
  console.log('📋 Copy from .env.example and fill in your Firebase project details')
}

export { auth, db, storage, analytics, performance }
export default app
