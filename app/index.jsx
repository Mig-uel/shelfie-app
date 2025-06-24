import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import ThemedLogo from '../components/ThemedLogo'

// Themed components
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'

export default function Home() {
  return (
    /**
     * You can think if the native View component as a div and
     * is mostly used as a wrapper that groups nested components,
     * and can help with content structure and layout
     * View component will often be used a root component
     */
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText
        style={styles.title}
        title
      >
        The Number 1
      </ThemedText>

      <Spacer height={10} />

      <ThemedText>Reading list app</ThemedText>

      <Spacer />

      <Link
        href={'/about'}
        style={styles.link}
      >
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link
        href={'/contact'}
        style={styles.link}
      >
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

/**
 * Styles can be in its own variable or inline
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
})
