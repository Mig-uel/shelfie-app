import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

export default function ({ children }) {
  const [user, setUser] = useState(null)

  async function login({ email, password }) {}

  async function register({ email, password }) {}

  async function logout({ email, password }) {}

  const value = {
    login,
    register,
    logout,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const ctx = useContext(UserContext)

  if (!ctx) throw new Error('Cannot access context outside of parent')

  return ctx
}
