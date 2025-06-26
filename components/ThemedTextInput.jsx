import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'

export default function ThemedTextInput({ style = {}, ...props }) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  /**
   * TextInput is a native input component that React Native
   * provides us
   */
  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  )
}
const styles = StyleSheet.create({})
