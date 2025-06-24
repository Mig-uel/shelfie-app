import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function RootLayout() {
  /* <Slot />: Renders a page content */

  /* Stack component from Expo automatically manages navigation */
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#333',
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name='about'
        options={{ title: 'About' }}
      />
      <Stack.Screen
        name='contact'
        options={{ title: 'Contact' }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({})

/**
 * The Stack component from Expo Router manages navigation between screens
 * in the app, handling transitions and navigation history automatically.
 */
