import { StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

export default function Books() {
  return (
    <ThemedView
      style={styles.container}
      safe
    >
      <Spacer />

      <ThemedText
        title
        style={styles.heading}
      >
        Your Reading List
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'stretch',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
})

/**
 * The Safe Area is the area of the screen that is not hidden by
 * device features or built-in device UI elements (e.g. clock, battery)
 */
