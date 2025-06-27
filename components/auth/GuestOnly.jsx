import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { useUserContext } from '../../context/UserContext'
import ThemedLoader from '../ThemedLoader'

export default function GuestOnly({ children }) {
  const router = useRouter()
  const { authChecked, user } = useUserContext()

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace('/profile')
    }
  }, [authChecked, user])

  if (!authChecked || user) return <ThemedLoader />

  return children
}
