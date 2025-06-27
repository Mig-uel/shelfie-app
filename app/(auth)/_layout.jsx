import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import GuestOnly from '../../components/auth/GuestOnly'

export default function AuthLayout() {
  return (
    <GuestOnly>
      <StatusBar />

      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      />
    </GuestOnly>
  )
}

const styles = StyleSheet.create({})
