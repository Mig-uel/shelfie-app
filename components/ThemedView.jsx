import { useColorScheme, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '../constants/colors'

export default function ThemedView({
  style = {},
  safe = false,
  children,
  ...props
}) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  /**
   * Different technique for implementing a SafeAreaView
   */
  const insets = useSafeAreaInsets()

  if (!safe) {
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

  /**
   * SafeAreaView component auto assesses where the safe areas of
   * the screen is and keeps the content within the safe area
   *
   * It figures out the space needed for the view based on the device
   * and applies padding around it to adjust where the content goes
   */
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
        { ...props },
      ]}
    >
      {children}
    </View>
  )
}
