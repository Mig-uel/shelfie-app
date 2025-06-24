import { useColorScheme, View } from 'react-native'
import { Colors } from '../constants/colors'

export default function ThemedView({ style = {}, children, ...props }) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        style,
        { ...props },
      ]}
    >
      {children}
    </View>
  )
}
