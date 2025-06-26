import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'
import UserProvider from '../context/UserContext'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  /* Stack component from Expo automatically manages navigation */
  return (
    /**
     * The Stack component from Expo Router manages navigation between screens
     * in the app, handling transitions and navigation history automatically.
     */
    <UserProvider>
      <StatusBar />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen
          name='(auth)'
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='(dashboard)'
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='index'
          options={{
            title: 'Home',
          }}
        />
      </Stack>
    </UserProvider>
  )
}

const styles = StyleSheet.create({})

/* <Slot />: Renders a page content */
