import { createContext, useContext, useState } from 'react'

export const BooksContext = createContext(null)

function BooksProvider({ children }) {
  const [books, setBooks] = useState([])

  /**
   * Function to fetch books from database
   */
  async function fetchBooks() {
    try {
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
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * Function to delete a book
   * @param {string} id
   */
  async function deleteBook(id) {}

  const value = { books, createBook, deleteBook, fetchBooks, fetchBookById }

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}

export default BooksProvider

export function useBooksContext() {
  const ctx = useContext(BooksContext)

  if (!ctx) throw new Error('Books context cannot be accessed outside parent')

  return ctx
}
