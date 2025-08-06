// Development helper untuk menyaring Firebase console errors yang tidak penting
export const setupFirebaseDevSettings = () => {
    if (import.meta.env.DEV) {
        // Suppress specific Firebase console warnings yang umum di localhost
        const originalConsoleWarn = console.warn
        const originalConsoleError = console.error

        console.warn = (...args) => {
            const message = args.join(' ')

            // Skip Firebase WebChannel dan stream errors yang normal di development
            if (
                message.includes('WebChannelConnection') ||
                message.includes('transport errored') ||
                message.includes('stream 0x') ||
                message.includes('Failed to get document because the client is offline') ||
                message.includes('Could not reach Cloud Firestore backend')
            ) {
                return // Skip these warnings
            }

            originalConsoleWarn.apply(console, args)
        }

        console.error = (...args) => {
            const message = args.join(' ')

            // Skip Firebase connection errors yang normal di development
            if (
                message.includes('Failed to load resource') && message.includes('400') ||
                message.includes('WebChannelConnection') ||
                message.includes('Firestore (') && message.includes('transport errored')
            ) {
                return // Skip these errors
            }

            originalConsoleError.apply(console, args)
        }

        console.log('🔧 Firebase development settings loaded - common localhost errors suppressed')
    }
}

// Firebase connection status helper
export const checkFirebaseConnection = async () => {
    try {
        // Simple test to check if Firebase is reachable
        const { db } = await import('./config')
        const { doc, getDoc } = await import('firebase/firestore')

        if (!db) {
            console.log('⚠️ Firebase not configured')
            return false
        }

        await getDoc(doc(db, 'test', 'test'))
        console.log('✅ Firebase connection: OK')
        return true
    } catch (error) {
        if (import.meta.env.DEV) {
            console.log('⚠️  Firebase connection: Limited (normal di localhost)')
        } else {
            console.error('❌ Firebase connection error:', error)
        }
        return false
    }
}
