import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Text } from 'react-native'
import { useUserContext } from '../../context/UserContext'

export default function UserOnly({ children }) {
  const router = useRouter()
  const { authChecked, user } = useUserContext()

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace('/login')
    }
  }, [authChecked, user])

  if (!authChecked || !user) return <Text>Loading...</Text>

  return children
}
