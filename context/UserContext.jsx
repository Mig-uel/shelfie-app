import { createContext, useContext, useEffect, useState } from 'react'
import { ID } from 'react-native-appwrite'
import { account } from '../lib/appwrite'

export const UserContext = createContext()

export default function ({ children }) {
  const [user, setUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  /**
   * Function to login user
   * @param {email, password}
   */
  async function login({ email, password }) {
    try {
      await account.createEmailPasswordSession(email, password)

      const response = await account.get()

      setUser(response)
    } catch (error) {
      throw Error(error.message)
    }
  }

  /**
   * Function to register user
   * @param {email, password} param0
   */
  async function register({ email, password }) {
    try {
      await account.create(ID.unique(), email, password)

      // Manually login user after creating account
      await login({ email, password })
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function logout({ email, password }) {
    await account.deleteSession('current')
    setUser(null)
  }

  const value = {
    authChecked,
    user,
    login,
    register,
    logout,
  }

  async function getInitialUserValue() {
    try {
      const user = await account.get()
      setUser(user)
    } catch (error) {
      setUser(null)
    } finally {
      setAuthChecked(true)
    }
  }

  useEffect(() => {
    getInitialUserValue()
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const ctx = useContext(UserContext)

  if (!ctx) throw new Error('Cannot access context outside of parent')

  return ctx
}
