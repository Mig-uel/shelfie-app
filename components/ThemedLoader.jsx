import { ActivityIndicator, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'

export default function ThemedLoader({ style = {} }) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ActivityIndicator
      size='large'
      color={theme.text}
    />
  )
}
