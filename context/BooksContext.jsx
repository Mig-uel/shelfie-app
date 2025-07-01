import { createContext, useContext, useEffect, useState } from 'react'
import { ID, Permission, Query, Role } from 'react-native-appwrite'
import { config } from '../config'
import { client, database } from '../lib/appwrite'
import { useUserContext } from './UserContext'
export const BooksContext = createContext(null)

function BooksProvider({ children }) {
  const [books, setBooks] = useState([])
  const { user } = useUserContext()

  /**
   * Function to fetch books from database
   */
  async function fetchBooks() {
    try {
      const response = await database.listDocuments(
        config.APPWRITE_DB_ID,
        config.APPWRITE_DB_COLLECTION_ID,
        [Query.equal('userId', user.$id)]
      )

      setBooks(response.documents)
      console.log(response.documents)
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * Function to fetch a book by ID
   * @param {string} id
   */
  async function fetchBookById(id) {
    try {
      const response = await database.getDocument(
        config.APPWRITE_DB_ID,
        config.APPWRITE_DB_COLLECTION_ID,
        id
      )

      return response
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * Function to create a new book
   * @param {book} data
   */
  async function createBook(data) {
    try {
      await database.createDocument(
        config.APPWRITE_DB_ID,
        config.APPWRITE_DB_COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * Function to delete a book
   * @param {string} id
   */
  async function deleteBook(id) {
    try {
      await database.deleteDocument(
        config.APPWRITE_DB_ID,
        config.APPWRITE_DB_ID,
        id
      )
    } catch (error) {}
  }

  const value = { books, createBook, deleteBook, fetchBooks, fetchBookById }

  useEffect(() => {
    let unsubscribe = undefined

    const channel = `databases.${config.APPWRITE_DB_ID}.collections.${config.APPWRITE_DB_COLLECTION_ID}.documents`

    if (user) {
      fetchBooks()

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response

        if (events[0].includes('create')) {
          setBooks((prev) => [...prev, payload])
        }

        if (events[0].includes('delete')) {
          setBooks((prev) => prev.filter((b) => b.$id !== payload.$id))
        }
      })
    } else {
      setBooks([])
    }

    // return cleanup function
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [user])

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}

export default BooksProvider

export function useBooksContext() {
  const ctx = useContext(BooksContext)

  if (!ctx) throw new Error('Books context cannot be accessed outside parent')

  return ctx
}
