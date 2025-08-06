import {
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    type DocumentData,
    type QueryConstraint
} from 'firebase/firestore'
import { db } from '../firebase/config'

// Helper function untuk handle Firebase errors di development
const handleFirebaseError = (error: unknown, operation: string) => {
    if (import.meta.env.DEV) {
        console.warn(`Firebase ${operation} error (normal di localhost):`, error)
    } else {
        console.error(`Firebase ${operation} error:`, error)
    }
}

// Generic CRUD operations for Firestore
export class FirestoreService {
    // Create a document
    static async create(collectionName: string, data: DocumentData) {
        if (!db) {
            throw new Error('Firestore not initialized')
        }
        try {
            const docRef = await addDoc(collection(db, collectionName), {
                ...data,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            return docRef.id
        } catch (error) {
            handleFirebaseError(error, 'create')
            throw error
        }
    }

    // Read a document
    static async read(collectionName: string, id: string) {
        if (!db) {
            throw new Error('Firestore not initialized')
        }
        try {
            const docRef = doc(db, collectionName, id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() }
            } else {
                return null
            }
        } catch (error) {
            console.error('Error getting document:', error)
            throw error
        }
    }

    // Read multiple documents with optional constraints
    static async getAll(collectionName: string, constraints: QueryConstraint[] = []) {
        if (!db) {
            throw new Error('Firestore not initialized')
        }
        try {
            const q = query(collection(db, collectionName), ...constraints)
            const querySnapshot = await getDocs(q)

            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        } catch (error) {
            console.error('Error getting documents:', error)
            throw error
        }
    }

    // Update a document
    static async update(collectionName: string, id: string, data: Partial<DocumentData>) {
        if (!db) {
            throw new Error('Firestore not initialized')
        }
        try {
            const docRef = doc(db, collectionName, id)
            await updateDoc(docRef, {
                ...data,
                updatedAt: new Date()
            })
            return true
        } catch (error) {
            console.error('Error updating document:', error)
            throw error
        }
    }

    // Delete a document
    static async delete(collectionName: string, id: string) {
        if (!db) {
            throw new Error('Firestore not initialized')
        }
        try {
            const docRef = doc(db, collectionName, id)
            await deleteDoc(docRef)
            return true
        } catch (error) {
            console.error('Error deleting document:', error)
            throw error
        }
    }

    // Query helpers
    static where = where
    static orderBy = orderBy
    static limit = limit
}

// Specific collection services
export const ProjectsService = {
    async getProjects() {
        return FirestoreService.getAll('projects', [
            FirestoreService.orderBy('createdAt', 'desc')
        ])
    },

    async getProject(id: string) {
        return FirestoreService.read('projects', id)
    },

    async createProject(projectData: DocumentData) {
        return FirestoreService.create('projects', projectData)
    },

    async updateProject(id: string, data: Partial<DocumentData>) {
        return FirestoreService.update('projects', id, data)
    },

    async deleteProject(id: string) {
        return FirestoreService.delete('projects', id)
    }
}

export const MembersService = {
    async getMembers() {
        return FirestoreService.getAll('members', [
            FirestoreService.orderBy('joinedAt', 'desc')
        ])
    },

    async getMember(id: string) {
        return FirestoreService.read('members', id)
    },

    async createMember(memberData: DocumentData) {
        return FirestoreService.create('members', memberData)
    },

    async updateMember(id: string, data: Partial<DocumentData>) {
        return FirestoreService.update('members', id, data)
    }
}
