import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'

export default function AuthLayout() {
  return (
    <>
      <StatusBar />

      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({})
