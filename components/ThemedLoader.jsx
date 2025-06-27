import { ActivityIndicator, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'
import ThemedView from './ThemedView'

export default function ThemedLoader({ style = {} }) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ActivityIndicator
        size='large'
        color={theme.text}
      />
    </ThemedView>
  )
}
