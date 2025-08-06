import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  type User,
  type AuthError
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  // Computed
  const isAuthenticated = computed(() => !!user.value)
  const userDisplayName = computed(() => user.value?.displayName || user.value?.email || 'User')

  // Actions
  const login = async (email: string, password: string) => {
    try {
      error.value = null
      loading.value = true
      const result = await signInWithEmailAndPassword(auth, email, password)
      user.value = result.user
      return result
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const register = async (email: string, password: string, displayName?: string) => {
    try {
      error.value = null
      loading.value = true
      const result = await createUserWithEmailAndPassword(auth, email, password)

      if (displayName && result.user) {
        await updateProfile(result.user, { displayName })
      }

      user.value = result.user
      return result
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      error.value = null
      await signOut(auth)
      user.value = null
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message
      throw err
    }
  }

  const clearError = () => {
    error.value = null
  }

  // Initialize auth state listener
  const initAuth = () => {
    onAuthStateChanged(auth, (firebaseUser) => {
      user.value = firebaseUser
      loading.value = false
    })
  }

  return {
    // State
    user,
    loading,
    error,

    // Getters
    isAuthenticated,
    userDisplayName,

    // Actions
    login,
    register,
    logout,
    clearError,
    initAuth
  }
})
