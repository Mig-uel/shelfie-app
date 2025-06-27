import { Text, View } from 'react-native'
import { useUserContext } from '../../context/UserContext'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function GuestOnly({ children }) {
  const router = useRouter()
  const { authChecked, user } = useUserContext()

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace('/profile')
    }
  }, [authChecked, user])

  if (!authChecked || user) return <Text>Loading...</Text>

  return children
}
